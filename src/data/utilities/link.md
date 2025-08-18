---
title: "Link Utilities"
slug: "utility/link"
---

The link utilities provide an easy way to style regular links. Text color and the text color of the hover state are changed by default.

## Basic Usage

<div class="not-content">
  <a href="#" class="link">This is a link.</a>
</div>

<!-- prettier-ignore -->
```html
<a href="#" class="link">This is a link.</a>
```

---

## Variants

You can also use `link-*`, where `*` is any color registered in Tailwind. You will also need a `--text-*-hover` css variable to automatically control the text color on hover. These are built in for all of the default Epicwind UI colors.

### Colors

#### Brand Colors

<div class="not-content">
  <a class="link link-primary" href="#">Primary Link</a>
  <a class="link link-secondary" href="#">Secondary Link</a>
  <a class="link link-accent" href="#">Accent Link</a>
  <a class="link link-accent-alt" href="#">Accent Alt Link</a>
</div>

<!-- prettier-ignore -->
```html
<a class="link link-primary" href="#">Primary Link</a>
<a class="link link-secondary" href="#">Secondary Link</a>
<a class="link link-accent" href="#">Accent Link</a>
<a class="link link-accent-alt" href="#">Accent Alt Link</a>
```

---

#### Grayscale Colors

<div class="not-content">
  <a class="link link-white bg-black" href="#">White Link</a>
  <a class="link link-light" href="#">Light Link</a>
  <a class="link link-neutral" href="#">Neutral Link</a>
  <a class="link link-dark" href="#">Dark Link</a>
  <a class="link link-black" href="#">Black Link</a>
</div>

<!-- prettier-ignore -->
```html
<a class="link link-white bg-black" href="#">White Link</a>
<a class="link link-light" href="#">Light Link</a>
<a class="link link-neutral" href="#">Neutral Link</a>
<a class="link link-dark" href="#">Dark Link</a>
<a class="link link-black" href="#">Black Link</a>
```

---

#### Status Colors

<div class="not-content">
  <a class="link link-success" href="#">Success Link</a>
  <a class="link link-error" href="#">Error Link</a>
  <a class="link link-warning" href="#">Warning Link</a>
  <a class="link link-notice" href="#">Notice Link</a>
  <a class="link link-info" href="#">Info Link</a>
  <a class="link link-deprecated" href="#">Deprecated Link</a>
  <a class="link link-decorative" href="#">Decorative Link</a>
  <a class="link link-muted" href="#">Muted Link</a>
</div>

<!-- prettier-ignore -->
```html
<a class="link link-success" href="#">Success Link</a>
<a class="link link-error" href="#">Error Link</a>
<a class="link link-warning" href="#">Warning Link</a>
<a class="link link-notice" href="#">Notice Link</a>
<a class="link link-info" href="#">Info Link</a>
<a class="link link-deprecated" href="#">Deprecated Link</a>
<a class="link link-decorative" href="#">Decorative Link</a>
<a class="link link-muted" href="#">Muted Link</a>
```

## Customizing

You may edit the `--color-*`, and `--color-*-hover` variables to overwride these colors.

Note that the [`variant`](/utility/variant) utility uses these variables, but in a different way. See it's docs for more info.

<!-- prettier-ignore -->
```css
  --color-primary: var(--color-green-200)
  --color-primary-hover: var(--color-green-800);
```
