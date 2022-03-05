---
title: 1_Fundamentals
---

# fastai fundamentals

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />


## DataLoaders

`DataLoaders` is a thin class around [DataLoader](https://pytorch.org/tutorials/beginner/basics/data_tutorial.html#preparing-your-data-for-training-with-dataloaders), and makes them available as `train` and `valid`.

Same thing applies to `Datasets` and `Dataset`.

In pytorch, `Dataset` is fed into a `DataLoader`. 

## DataBlocks

> Use this to create `DataLoaders`

```python
bears = DataBlock(
    blocks=(ImageBlock, CategoryBlock), 
    get_items=get_image_files, 
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=Resize(128))
```

`DataBlocks` are a template for creating `DataLoaders`, and need to be instantiated somehow - for example given a path where to find the data: 

```python
dls = bears.dataloaders(path)
```

You can modify the settings of a `DataBlock` with `new`:

```python
bears = bears.new(item_tfms=RandomResizedCrop(128, min_scale=0.3)) #book has more examples
dls = bears.dataloaders(path)
```

You can sanity check / see transformed data with `show_batch`:

```python
>>> dls.train.show_batch(max_n=8, nrows=2, unique=True)
... images
```

You also use `DataBlocks` for data augmentation, with `batch_tfms`:

```python
bears = bears.new(
    item_tfms=Resize(128),        
    batch_tfms=aug_transforms(mult=2)
)
dls = bears.dataloaders(path)
dls.train.show_batch(max_n=8, nrows=2, unique=True)
```

## Training

Most things use `learn.fine_tune()`, when you cannot fine-tune like tabular data, you often use `learn.fit_one_cycle`

You can also do `learn.show_results(...)`

```python
from fastai.vision.all import *
path = untar_data(URLs.PETS)/'images'

def is_cat(x): 
    return x[0].isupper()
dls = ImageDataLoaders.from_name_func(
        path=str(path), 
        fnames=get_image_files(path), 
        valid_pct=0.2, 
        seed=42,
        label_func=is_cat, 
        item_tfms=Resize(224))

learn = cnn_learner(dls, resnet34, metrics=error_rate)
learn.fine_tune(1)
```

More info on what this is in later sections.

### Interpetability

```python
interp = ClassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()
```

Also see top losses:

```python
interp.plot_top_losses(5, nrows=1)
```

### Cleaning

You can get a `ImageClassifierCleaner` which allows you to choose (1) a category and (2) data partition (train/val) and shows you the highest loss items so you can decide whether to Keep, Delete, Change etc.

```python
cleaner = ImageClassifierCleaner(learn)
cleaner
```

The thing doesn't actually delete/change anything but gives you the idxs that allow you to do things with them

```python
for idx in cleaner.delete(): cleaner.fns[idx].unlink()
for idx,cat in cleaner.change(): shutil.move(str(cleaner.fns[idx]), path/cat)
```

### Loading / Saving

Saving a model can be done with `learn.export`, when you do this, fastai will save a file called "export.pkl"

```python
learn.export()
```

`load_learner` can be used to load a model

```python
learn_inf = load_learner(path/'export.pkl')
```

### Predicting

When you call predict,  you will get three things: (1) class, (2) the index of the predicted category (3) Probabilities of each category

```python
>>> learn_inf.predict('images/grizzly.jpg')
('grizzly', tensor(1), tensor([9.0767e-06, 9.9999e-01, 1.5748e-07]))
```

You can see all the classes with `dls.vocab`:

```python
>>> learn_inf.dls.vocab
(#3) ['black','grizzly','teddy']
```

Zach: `learn.dls.vocab` or `learn.dls.categorize.vocab` is another way to get the class names.

## Computer Vision

You can open an image with `Pilow (PIL)`

```python
im3 = Image.open(im3_path)
im3

#convert to numpy
array(im3)
# convert to pytorch tensor
tensor(im3)

```

### Pixel Similarity Baseline
1. Compute avg pixel value for 3's and 7's
2. At inference time, see which one its similar too, using `RMSE (L2 Norm)` and `MAE (L1 Norm)`

_Kind of like KNN_

Taking an inference tensor, `a_3` and calculate distance to mean 3 and 7:

```python
# MAE & RMSE for 3  vs avg3
dist_3_abs = (a_3 - mean3).abs().mean()
dist_3_sqr = ((a_3 - mean3)**2).mean().sqrt()

# MAE & RMSE for 3  vs avg7
dist_7_abs = (a_3 - mean7).abs().mean()
dist_7_sqr = ((a_3 - mean7)**2).mean().sqrt()

# Use Pytorch Losses to do the same thing for 3 vs avg 7
F.l1_loss(a_3.float(),mean7), F.mse_loss(a_3,mean7).sqrt()
```

### numpy

Take the mean over an axis:

```python
def mnist_distance(a,b): 
    #(-2,1) means take the average of the last 2 axis
    return (a-b).abs().mean((-2,-1))
```

## SGD from scratch

### Minimal Example


```python
# the loss function
def mse(y, yhat): 
    return (y - yhat).square().mean().sqrt()

# the function that produces the data
def quadratic(x, params=[.75, -25.5, 15]):
    a,b,c = params
    noise = (torch.randn(len(x)) * 3)
    return a*(x**2) + b*x +c + noise

# generate training data
x = torch.arange(1, 40, 1)
y = quadratic(x)

# define the training loop
def apply_step(params, pr=True):
    lr = 1.05e-4
    preds = quadratic(x, params)
    loss = mse(preds, y)
    loss.backward()
    params.data -= params.grad.data * lr
    if pr: print(f'loss: {loss}')
    params.grad = None

# initialize random params
params = torch.rand(3)
params.requires_grad_()
assert params.requires_grad

# train the model
for _ in range(1000):
    apply_step(params)
```

### MNIST

A `Dataset` in pytorch is required to return a tuple of (x,y) when indexed.  You can do this in python as follows:

```python
# Turn mnist data into vectors 3dim -> 2dim
train_x = torch.cat([stacked_threes, stacked_sevens]).view(-1, 28*28)
# Generate label tensor
train_y = tensor([1]*len(threes) + [0]*len(sevens)).unsqueeze(1)
# Create dataset
dset = list(zip(train_x,train_y))

# See shapes from first datum in the dataset
>>> x,y = dset[0]
>>> x.shape, y.shape
(torch.Size([784]), torch.Size([1]))


# Do the same thing for the validation set
....

```


#### Mini Batch SGD



```python
# `@` and dot product is the same:
a, b = torch.rand(10), torch.rand(10)
assert a.dot(b) == a@b

# define model
def init_params(size, std=1.0): 
    return (torch.randn(size)*std).requires_grad_()
weights = init_params((28*28,1))
bias = init_params(1)

def linear1(xb): return xb@weights + bias

#naive loss (for illustration)
corrects = (preds>0.0).float() == train_y
corrects.float().mean().item()

# define loss
def mnist_loss(preds, targets):
    preds = preds.sigmoid() #squash b/w 0 and 1
    return torch.where(targets==1, 1-preds, preds).mean() # average distance loss
```

##### Create a dataloader

You want to load your data in batches, so you will want to create a dataloader.  Recall that in pytorch, a `Dataset` is required to return a tuple of (x,y) when indexed, which is quite easy to do:

```python
# define a data loader using `dset`
dset = list(zip(train_x,train_y))
```

Pytorch offers a utility to then create a `Dataloader` from a dataset, but Jeremy basically rolled his own (w/same api):

```python
dl = DataLoader(dset, batch_size=256)
valid_dl = DataLoader(valid_dset, batch_size=256)
```

#### The Training Loop

```python
def calc_grad(xb, yb, model):
    preds = model(xb)
    loss = mnist_loss(preds, yb)
    loss.backward()

def train_epoch(model, lr, params):
    for xb,yb in dl:
        calc_grad(xb, yb, model)
        for p in params:
            p.data -= p.grad*lr
            p.grad.zero_() #updates in place

### Calculate metrics
def batch_accuracy(xb, yb):
    preds = xb.sigmoid()
    correct = (preds>0.5) == yb
    return correct.float().mean()

def validate_epoch(model):
    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]
    return round(torch.stack(accs).mean().item(), 4)

# Train model
lr = 1.
params = weights,bias
train_epoch(linear1, lr, params)
validate_epoch(linear1)

# Train model w/epochs
for i in range(20):
    train_epoch(linear1, lr, params)
    print(validate_epoch(linear1), end=' ')
```

### Using Pytorch

Blueprint:
1. Define a dataset and then a dataloader
2. Create a model, which will have parameters
3. Create an optimizer, that:
    - Updates the params: params.data -= parmas.grad.data * lr
    - Zeros out the gradients: setting `params.grad = None` or zeroing out the gradients with `params.grad.zero_()`
4. Generate the predictions
5. Calculate the loss
6. Calculate the gradients `loss.backward()`
7. Using the optimizer, update the weights `step` and zero out the gradients `zero_grad`
8. Put 4-7 in a loop.

Create an optimizer and use `nn.Linear`
```python
linear_model = nn.Linear(28*28,1)
w,b = linear_model.parameters()

# Define an optimizer
class BasicOptim:
    def __init__(self,params,lr): self.params,self.lr = list(params),lr

    def step(self, *args, **kwargs):
        for p in self.params: p.data -= p.grad.data * self.lr

    def zero_grad(self, *args, **kwargs):
        for p in self.params: p.grad = None

opt = BasicOptim(linear_model.parameters(), lr)
# alternative, fastai provides SGD
opt = SGD(linear_model.parameters(), lr)

# Define Metrics
def batch_accuracy(xb, yb):
    preds = xb.sigmoid()
    correct = (preds>0.5) == yb
    return correct.float().mean()

# Helper to calculate metrics on validation set
def validate_epoch(model):
    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]
    return round(torch.stack(accs).mean().item(), 4)

def train_epoch(model):
    for xb,yb in dl:
        calc_grad(xb, yb, model)
        opt.step()
        opt.zero_grad()


def train_model(model, epochs):
    for i in range(epochs):
        train_epoch(model)
        print(validate_epoch(model), end=' ')


train_model(linear_model, 20)
```

#### Using fastai

We can substitute the above with `learner.fit` from fastai
We just have to supply the following:

1. Dataloaders
2. Model
3. Optimization function
4. Loss function
5. Metrics

```python
dls = DataLoaders(dl, valid_dl)
learn = Learner(dls, nn.Linear(28*28,1), opt_func=SGD, 
                loss_func=mnist_loss,
                metrics=batch_accuracy)

learn.fit(10, lr=lr)
```

What if you used the full power of fastai?  It would look like this:

```python
dls = ImageDataLoaders.from_folder(path)
# Lots of things have defaults like optimization func
learn = cnn_learner(dls, resnet18, pretrained=False,
                    loss_func=F.cross_entropy, 
                     metrics=accuracy)
learn.fit_one_cycle(1, 0.1)
```

## Simple Neural Nets

The next step is to introduce a non-linearity

```python
simple_net = nn.Sequential(
    nn.Linear(28*28, 30),
    nn.ReLU(),
    nn.Linear(30, 1)
)

# Construct the learner as before
learn = learner(dls, simple_net, opt_func=SGD,
               loss_func=mnist_loss, metrics=batch_accuracy)

learner.fit(40, 0.1)
```

### Inspecting Training History

The training history is saved in `learn.recorder`.  You can plot your training progress with:

```python
plt.plot(learn.recorder.values).itemgot(2)
```
