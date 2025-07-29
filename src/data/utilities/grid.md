---
title: "Grid Layout Utilities"
slug: "utility/grid"
---

The grid layout utilities provides an easy way to make a grid layout with columns. The parent is set to a display of grid, and a gap is provided by default.

## Basic Usage

<div class="grid-row-12">
  <div class="grid-col-3">This takes up 3 columns.</div>
  <div class="grid-col-5">This takes up 5 columns.</div>
  <div class="grid-col-4">This takes up 4 columns.</div>
</div>

<!-- prettier-ignore -->
```html
<div class="grid-row-12">
  <div class="grid-col-3">This takes up 3 columns.</div>
  <div class="grid-col-5">This takes up 5 columns.</div>
  <div class="grid-col-4">This takes up 4 columns.</div>
</div>
```

---

## Custom Gap

<div class="grid-row-12 gap-sm">
  <div class="grid-col-3">This takes up 3 columns.</div>
  <div class="grid-col-5">This takes up 5 columns.</div>
  <div class="grid-col-4">This takes up 4 columns.</div>
</div>

<!-- prettier-ignore -->
```html
<div class="grid-row-12 gap-sm">
  <div class="grid-col-3">This takes up 3 columns.</div>
  <div class="grid-col-5">This takes up 5 columns.</div>
  <div class="grid-col-4">This takes up 4 columns.</div>
</div>
```

---

## Customize Default Gap

### Default

<!-- prettier-ignore -->
```css
@theme {
  --default-grid-gap: var(--spacing-md);
}
```

### Customized

<!-- prettier-ignore -->
```css
@theme {
  --default-grid-gap: var(--spacing-sm);
}
```
