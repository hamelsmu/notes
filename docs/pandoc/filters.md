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
pandoc --to gfm minimal.ipynb
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
quarto render minimal.ipynb --to gfm
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

