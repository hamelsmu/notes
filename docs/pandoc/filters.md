---
title: pandoc filters
---

Two python packages

<div></div>

- [panflute](http://scorreia.com/software/panflute/) - recommended
- [pandocfilters](https://github.com/jgm/pandocfilters)

The [tutorial](https://pandoc.org/filters.html) on pandoc filters can help you get setup.  If rolling your own filters, you probably want to use the JSON filters and make use of the `-t native` flag:

```
pandoc -s -t native test.txt
```


## Minimal ipynb to md converstion with pandoc

~~~
$ pandoc --to gfm minimal.ipynb
<div class="cell markdown">

## A minimal notebook

</div>

<div class="cell code" execution_count="1">

``` python
# Do some arithmetic
1+1
```

<div class="output execute_result" execution_count="1">

    2

</div>

</div>
~~~

## Minimal ipynb to md converstion with quarto



```
$ quarto render minimal.ipynb --to gfm
pandoc
  to: gfm+footnotes+tex_math_dollars-yaml_metadata_block
  output-file: minimal.md
  standalone: true
  default-image-extension: png
  filters:
    - crossref

Output created: minimal.md
```
This creates


~~~
## A minimal notebook

``` python
# Do some arithmetic
1+1
```

    2
~~~


## Running Pandoc With those Extensions

running pandoc with `--standalone --to gfm+footnotes+tex_math_dollars-yaml_metadata_block` creates the same result.

## How to use panflute

The [examples](https://github.com/sergiocorreia/panflute-filters) are helpful.

This filter places `CodeOutput` blocks around code as well as changes the codefence to have `file=script.py` in order to hack the code fence.

```python
#!/Users/hamel/opt/anaconda3/bin/python
#flute.py
from typing import Text
from panflute import *
from logging import warning


def increase_header_level(elem, doc):
    if type(elem) == CodeBlock and type(elem.parent.prev) == CodeBlock:
        return ([RawBlock("<CodeOutput>"), elem, RawBlock("</CodeOutput>")])
    elif type(elem) == CodeBlock:
        elem.classes = ['file=script.py']


def main(doc=None):
    return run_filter(increase_header_level, doc=doc)


if __name__ == "__main__":
    main()
```

Seeing the output:

~~~
$ pandoc --to gfm minimal.ipynb --filter "flute.py"
<div class="cell markdown">

## A minimal notebook

</div>

<div class="cell markdown">

<MyTag></MyTag>

</div>

<div class="cell code" execution_count="1">

``` file=script.py
# Do some arithmetic
print(1+1)
```

<div class="output stream stdout">

<CodeOutput>

    2

</CodeOutput>

</div>

</div>
~~~

Note: we could probably replace the inner div with the `output` class with `<CodeOutput>` tag

Just for completeness, this is the schema of the minimal notebook using the `--to native` flag:

```
pandoc --to native minimal.ipynb
[ Div
    ( "" , [ "cell" , "markdown" ] , [] )
    [ Header
        2
        ( "a-minimal-notebook" , [] , [] )
        [ Str "A" , Space , Str "minimal" , Space , Str "notebook" ]
    ]
, Div
    ( "" , [ "cell" , "markdown" ] , [] )
    [ Para
        [ RawInline (Format "html") "<MyTag>"
        , RawInline (Format "html") "</MyTag>"
        ]
    ]
, Div
    ( ""
    , [ "cell" , "code" ]
    , [ ( "execution_count" , "1" ) ]
    )
    [ CodeBlock
        ( "" , [ "python" ] , [] )
        "# Do some arithmetic\nprint(1+1)"
    , Div
        ( "" , [ "output" , "stream" , "stdout" ] , [] )
        [ CodeBlock ( "" , [] , [] ) "2\n" ]
    ]
]
````