---
title: "Button Components"
slug: "component/button"
---

A simple button component. Only `a` and `button` tags receive hover states by default.

## Basic Usage

<div class="buttons not-content">
  <a class="button" href="#">Button (a tag)</a>
  <button class="button">Button (button tag)</button>
  <div class="button">Button (any other tag)</div>
</div>

<!-- prettier-ignore -->
```html
<div class="buttons">
  <a class="button" href="#">Button (a tag)</a>
  <button class="button">Button (button tag)</button>
  <div class="button">Button (any other tag)</div>
</div>
```

---

## Variants

Variants give an easy way to customize the button component. See the [variant utilities](/utility/variant) to learn more.

### Colors

#### Brand Colors

<div class="buttons not-content">
  <a class="button variant-primary" href="#">Primary Button</a>
  <a class="button variant-secondary" href="#">Secondary Button</a>
  <a class="button variant-accent" href="#">Accent Button</a>
  <a class="button variant-accent-alt" href="#">Accent Alt Button</a>
</div>

<!-- prettier-ignore -->
```html
<div class="buttons">
  <a class="button variant-primary" href="#">Primary Button</a>
  <a class="button variant-secondary" href="#">Secondary Button</a>
  <a class="button variant-accent" href="#">Accent Button</a>
  <a class="button variant-accent-alt" href="#">Accent Alt Button</a>
</div>
```

---

#### Grayscale Colors

<div class="buttons not-content">
  <a class="button variant-white" href="#">White Button</a>
  <a class="button variant-light" href="#">Light Button</a>
  <a class="button variant-neutral" href="#">Neutral Button</a>
  <a class="button variant-dark" href="#">Dark Button</a>
  <a class="button variant-black" href="#">Black Button</a>
</div>

<!-- prettier-ignore -->
```html
<div class="buttons">
  <a class="button variant-white" href="#">White Button</a>
  <a class="button variant-light" href="#">Light Button</a>
  <a class="button variant-neutral" href="#">Neutral Button</a>
  <a class="button variant-dark" href="#">Dark Button</a>
  <a class="button variant-black" href="#">Black Button</a>
</div>
```

---

#### Status Colors

<div class="buttons not-content">
  <a class="button variant-success" href="#">Success Button</a>
  <a class="button variant-error" href="#">Error Button</a>
  <a class="button variant-warning" href="#">Warning Button</a>
  <a class="button variant-notice" href="#">Notice Button</a>
  <hr class="break">
  <a class="button variant-info" href="#">Info Button</a>
  <a class="button variant-deprecated" href="#">Deprecated Button</a>
  <a class="button variant-decorative" href="#">Decorative Button</a>
  <a class="button variant-muted" href="#">Muted Button</a>
</div>

<!-- prettier-ignore -->
```html
<div class="buttons">
  <a class="button variant-success" href="#">Success Button</a>
  <a class="button variant-error" href="#">Error Button</a>
  <a class="button variant-warning" href="#">Warning Button</a>
  <a class="button variant-notice" href="#">Notice Button</a>
  <hr class="break">
  <a class="button variant-info" href="#">Info Button</a>
  <a class="button variant-deprecated" href="#">Deprecated Button</a>
  <a class="button variant-decorative" href="#">Decorative Button</a>
  <a class="button variant-muted" href="#">Muted Button</a>
</div>
```
