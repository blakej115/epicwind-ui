---
title: "Alert Component"
slug: "component/alert"
---

## Basic Usage

Alerts are a good way to notify users of different events. Only `a` and `button` tags receive hover states by default.

<div class="not-content flex flex-col gap-y-sm">
  <a class="alert" href="#">Alert (a tag)</a>
  <button class="alert">Alert (button tag)</button>
  <div class="alert content">
    <p>Alert (any other tag)</p>
  </div>
</div>

<!-- prettier-ignore -->
```html
<a class="alert">Alert (a tag)</a>
<button class="alert">Alert (button tag)</button>
<div class="alert content">
  <p>Alert (any other tag)</p>
</div>
```

---

## Variants

Variants give an easy way to customize the alert component. See the [variant utilities](/utility/variant) to learn more.

### Colors

#### Brand Colors

<div class="alert variant-primary content">
  <p>Primary Alert</p>
</div>
<div class="alert variant-secondary content">
  <p>Secondary Alert</p>
</div>
<div class="alert variant-accent content">
  <p>Accent Alert</p>
</div>
<div class="alert variant-accent-alt content">
  <p>Accent Alt Alert</p>
</div>

<!-- prettier-ignore -->
```html
<div class="alert variant-primary content">
  <p>Primary Alert</p>
</div>
<div class="alert variant-secondary content">
  <p>Secondary Alert</p>
</div>
<div class="alert variant-accent content">
  <p>Accent Alert</p>
</div>
<div class="alert variant-accent-alt content">
  <p>Accent Alt Alert</p>
</div>
```

---

#### Grayscale Colors

<div class="alert variant-white content">
  <p>White Alert</p>
</div>
<div class="alert variant-light content">
  <p>Light Alert</p>
</div>
<div class="alert variant-neutral content">
  <p>Neutral Alert</p>
</div>
<div class="alert variant-dark content">
  <p>Dark Alert</p>
</div>
<div class="alert variant-black content">
  <p>Black Alert</p>
</div>

<!-- prettier-ignore -->
```html
<div class="alert variant-white content">
  <p>White Alert</p>
</div>
<div class="alert variant-light content">
  <p>Light Alert</p>
</div>
<div class="alert variant-neutral content">
  <p>Neutral Alert</p>
</div>
<div class="alert variant-dark content">
  <p>Dark Alert</p>
</div>
<div class="alert variant-black content">
  <p>Black Alert</p>
</div>
```

---

#### Status Colors

<div class="alert variant-success content">
  <p>Success Alert</p>
</div>
<div class="alert variant-error content">
  <p>Error Alert</p>
</div>
<div class="alert variant-warning content">
  <p>Warning Alert</p>
</div>
<div class="alert variant-notice content">
  <p>Notice Alert</p>
</div>
<div class="alert variant-info content">
  <p>Info Alert</p>
</div>
<div class="alert variant-deprecated content">
  <p>Deprecated Alert</p>
</div>
<div class="alert variant-decorative content">
  <p>Decorative Alert</p>
</div>
<div class="alert variant-muted content">
  <p>Muted Alert</p>
</div>

<!-- prettier-ignore -->
```html
<div class="alert variant-success content">
  <p>Success Alert</p>
</div>
<div class="alert variant-error content">
  <p>Error Alert</p>
</div>
<div class="alert variant-warning content">
  <p>Warning Alert</p>
</div>
<div class="alert variant-notice content">
  <p>Notice Alert</p>
</div>
<div class="alert variant-info content">
  <p>Info Alert</p>
</div>
<div class="alert variant-deprecated content">
  <p>Deprecated Alert</p>
</div>
<div class="alert variant-decorative content">
  <p>Decorative Alert</p>
</div>
<div class="alert variant-muted content">
  <p>Muted Alert</p>
</div>
```
