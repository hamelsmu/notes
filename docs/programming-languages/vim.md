---
title: "VIM"
parent: programming languages
autoCollapseToc: true
layout: default
---

For the Standard ML programming language I decided to force myself to use vim.  I added the following things to my `.vimrc` to make it manageable.  Note the plugin `jez/vim-better-sml`

```
" from https://github.com/jez/vim-as-an-ide
set nocompatible

inoremap <C-e> <C-o>A


filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

" ----- Making Vim look good ------------------------------------------
Plugin 'altercation/vim-colors-solarized'
Plugin 'tomasr/molokai'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'

" ----- Vim as a programmer's text editor -----------------------------
Plugin 'scrooloose/nerdtree'
Plugin 'jistr/vim-nerdtree-tabs'
Plugin 'vim-syntastic/syntastic'
Plugin 'xolox/vim-misc'
Plugin 'xolox/vim-easytags'
Plugin 'majutsushi/tagbar'
Plugin 'ctrlpvim/ctrlp.vim'
" ----- Working with Git ----------------------------------------------
Plugin 'airblade/vim-gitgutter'
Plugin 'tpope/vim-fugitive'
Plugin 'Raimondi/delimitMate'
Plugin 'jez/vim-better-sml'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'benmills/vimux'
call vundle#end()

filetype plugin indent on

set number
set ruler
set showcmd
set incsearch
set hlsearch
set backspace=indent,eol,start

syntax on
set mouse=a
```
