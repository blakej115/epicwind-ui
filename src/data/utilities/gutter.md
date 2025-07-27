---
title: "Gutter Utilities"
slug: "utility/gutter"
---

The gutter utilities provide built in spacing to handle the inside and outside gutters of your layout, as well as general spacing between elements.

## Basic Usage

<div class="gutter">This is the default gutter.</div>
<div class="gutter-x">This is the default gutter on the x axis only.</div>
<div class="gutter-y">This is the default gutter on the y axis only.</div>

<div class="gutter-sm">This is a small gutter.</div>
<div class="gutter-x-sm">This is a small gutter on the x axis only.</div>
<div class="gutter-y-sm">This is a small gutter on the y axis only.</div>

<!-- prettier-ignore -->
```html
<div class="gutter">This is the default gutter.</div>
<div class="gutter-x">This is the default gutter on the x axis only.</div>
<div class="gutter-y">This is the default gutter on the y axis only.</div>

<div class="gutter-sm">This is a small gutter.</div>
<div class="gutter-x-sm">This is a small gutter on the x axis only.</div>
<div class="gutter-y-sm">This is a small gutter on the y axis only.</div>
```

## Customize Default Gutters

### Default

See the <a href="/theme/gutter">Gutter theme</a> for all of the default variables. The default gutter below is used for various components.

<!-- prettier-ignore -->
```css
@theme {
  --default-gutter: var(--gutter);
}
```

### Customized

An example of customizing all of the gutter variables.

<!-- prettier-ignore -->
```css
@theme {
  --default-gutter: var(--gutter-lg);

  --gutter: var(--gutter-sm);

  --gutter-2xs: calc(var(--spacing) * 2);
  --gutter-xs: calc(var(--spacing) * 4);
  --gutter-sm: calc(var(--spacing) * 8);
  --gutter-md: calc(var(--spacing) * 16);
  --gutter-lg: calc(var(--spacing) * 32);
  --gutter-xl: calc(var(--spacing) * 64);
  --gutter-2xl: calc(var(--spacing) * 128);
}
```
