---
title: "Any Link Variant"
slug: "variant/any-link"
---

The `any-link` variant applies styles to any link that has a `href` attribute.

## Basic Usage

<div class="not-content flex flex-col">
  <a class="any-link:text-blue-500">This is a link without a `href`.</a>
  <a class="any-link:text-blue-500" href="/">This links to the home page</a>
  <a class="any-link:text-blue-500" href="#test">This is an anchor link.</a>
  <a class="any-link:text-blue-500" href="#">This is a blank anchor link.</a>
  <a class="any-link:text-blue-500" href="">This is a link with a blank `href` value.</a>
  <a class="any-link:text-blue-500" href>This is a link with the `href` attribute, but no value.</a>
  <a class="any-link:text-blue-500" href="javascript:void(0)">This is a link with a `javascript:void(0)` value.</a>
</div>

<!-- prettier-ignore -->
```html
  <a class="any-link:text-blue-500">This is a link without a `href`.</a>
  <a class="any-link:text-blue-500" href="/">This links to the home page</a>
  <a class="any-link:text-blue-500" href="#test">This is an anchor link.</a>
  <a class="any-link:text-blue-500" href="#">This is a blank anchor link.</a>
  <a class="any-link:text-blue-500" href="">This is a link with a blank `href` value.</a>
  <a class="any-link:text-blue-500" href>This is a link with the `href` attribute, but no value.</a>
  <a class="any-link:text-blue-500" href="javascript:void(0)">This is a link with a `javascript:void(0)` value.</a>
```
