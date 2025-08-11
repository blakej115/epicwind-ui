---
title: "Tag Components"
slug: "component/tag"
---

Tags are a great way to label and/or categorize items. They are kind of like buttons, but smaller. Only `a` and `button` tags receive hover states by default.

## Basic Usage

<div class="tags not-content">
  <a class="tag" href="#">Tag (a tag)</a>
  <button class="tag">Tag (button tag)</button>
  <div class="tag">Tag (any other tag)</div>
</div>

<!-- prettier-ignore -->
```html
<div class="tags">
  <a class="tag" href="#">Tag (a tag)</a>
  <button class="tag">Tag (button tag)</button>
  <div class="tag">Tag (any other tag)</div>
</div>
```

---

## Variants

Variants give an easy way to customize the tag component. See the [variant utilities](/utility/variant) to learn more.

### Colors

#### Brand Colors

<div class="tags not-content">
  <a class="tag variant-primary" href="#">Primary Tag</a>
  <a class="tag variant-secondary" href="#">Secondary Tag</a>
  <a class="tag variant-accent" href="#">Accent Tag</a>
  <a class="tag variant-accent-alt" href="#">Accent Alt Tag</a>
</div>

<!-- prettier-ignore -->
```html
<div class="tags">
  <a class="tag variant-primary" href="#">Primary Tag</a>
  <a class="tag variant-secondary" href="#">Secondary Tag</a>
  <a class="tag variant-accent" href="#">Accent Tag</a>
  <a class="tag variant-accent-alt" href="#">Accent Alt Tag</a>
</div>
```

---

#### Grayscale Colors

<div class="tags not-content">
  <a class="tag variant-white" href="#">White Tag</a>
  <a class="tag variant-light" href="#">Light Tag</a>
  <a class="tag variant-neutral" href="#">Neutral Tag</a>
  <a class="tag variant-dark" href="#">Dark Tag</a>
  <a class="tag variant-black" href="#">Black Tag</a>
</div>

<!-- prettier-ignore -->
```html
<div class="tags">
  <a class="tag variant-white" href="#">White Tag</a>
  <a class="tag variant-light" href="#">Light Tag</a>
  <a class="tag variant-neutral" href="#">Neutral Tag</a>
  <a class="tag variant-dark" href="#">Dark Tag</a>
  <a class="tag variant-black" href="#">Black Tag</a>
</div>
```

---

#### Status Colors

<div class="tags not-content">
  <a class="tag variant-success" href="#">Success Tag</a>
  <a class="tag variant-error" href="#">Error Tag</a>
  <a class="tag variant-warning" href="#">Warning Tag</a>
  <a class="tag variant-notice" href="#">Notice Tag</a>
  <hr class="break">
  <a class="tag variant-info" href="#">Info Tag</a>
  <a class="tag variant-deprecated" href="#">Deprecated Tag</a>
  <a class="tag variant-decorative" href="#">Decorative Tag</a>
  <a class="tag variant-muted" href="#">Muted Tag</a>
</div>

<!-- prettier-ignore -->
```html
<div class="tags">
  <a class="tag variant-success" href="#">Success Tag</a>
  <a class="tag variant-error" href="#">Error Tag</a>
  <a class="tag variant-warning" href="#">Warning Tag</a>
  <a class="tag variant-notice" href="#">Notice Tag</a>
  <hr class="break">
  <a class="tag variant-info" href="#">Info Tag</a>
  <a class="tag variant-deprecated" href="#">Deprecated Tag</a>
  <a class="tag variant-decorative" href="#">Decorative Tag</a>
  <a class="tag variant-muted" href="#">Muted Tag</a>
</div>
```
