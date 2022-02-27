# Fastai Notes

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

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


```python



`@` and dot product is the same:

```python
a, b = torch.rand(10), torch.rand(10)
assert a.dot(b) == a@b

```