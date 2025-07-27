---
title: "Flex Layout Utilities"
slug: "utility/flex"
---

The flex layout utilities provide an easy way to make a flex layout with columns. The parent is set to a display of flex, and a gap is provided by default.

## Basic Usage

<div class="flex-row-12">
  <div class="flex-col-3">This takes up 3 columns.</div>
  <div class="flex-col-5">This takes up 5 columns.</div>
  <div class="flex-col-fill">This takes up the remaining columns.</div>
</div>

<!-- prettier-ignore -->
```html
<div class="flex-row-12">
  <div class="flex-col-3">This takes up 3 columns.</div>
  <div class="flex-col-5">This takes up 5 columns.</div>
  <div class="flex-col-fill">This takes up the remaining columns.</div>
</div>
```

## Custom Gap

<div class="flex-row-12 flex-gap-sm">
  <div class="flex-col-3">This takes up 3 columns.</div>
  <div class="flex-col-5">This takes up 5 columns.</div>
  <div class="flex-col-fill">This takes up the remaining columns.</div>
</div>

<!-- prettier-ignore -->
```html
<div class="flex-row-12 flex-gap-sm">
  <div class="flex-col-3">This takes up 3 columns.</div>
  <div class="flex-col-5">This takes up 5 columns.</div>
  <div class="flex-col-fill">This takes up the remaining columns.</div>
</div>
```

## Customize Default Gap

### Default

<!-- prettier-ignore -->
```css
@theme {
  --default-flex-gap: var(--spacing-md);
}
```

### Customized

<!-- prettier-ignore -->
```css
@theme {
  --default-flex-gap: var(--spacing-sm);
}
```
