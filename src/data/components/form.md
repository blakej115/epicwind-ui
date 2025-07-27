---
title: "Form Components"
slug: "component/form"
---

## Inputs

### Input w/ Label

<div class="input">
  <label class="label" for="example-a">Example</label>
  <input class="field" type="text" id="example-a">
</div>

<!-- prettier-ignore -->
```html
<div class="input">
  <label class="label" for="example-a">Example</label>
  <input class="field" type="text" id="example-a">
</div>
```

<hr>

### Input w/ Placeholder

<div class="input">
  <input class="field" type="text" placeholder="Example">
</div>

<!-- prettier-ignore -->
```html
<div class="input">
  <input class="field" type="text" placeholder="Example">
</div>
```

<hr>

### Input Width

Simply add `w-full` to the `field` for full width. You can also add a `max-width` to the input to constrain the width.

<div class="input max-w-(--container-md)">
  <input class="field w-full" type="text" placeholder="Example">
</div>

<!-- prettier-ignore -->
```html
<div class="input max-w-(--container-md)">
  <input class="field w-full" type="text" placeholder="Example">
</div>
```

<hr>

## Forms

### Form

<form class="form">
  <div class="input">
    <input class="field" type="text" name="name" placeholder="Name">
  </div>
  <div class="input">
    <input class="field" type="email" name="email" placeholder="Email">
  </div>
  <div class="input">
    <input class="field" type="tel" name="phone" placeholder="Phone">
  </div>
  <div class="input">
    <textarea class="field" name="message" placeholder="Message"></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>

<!-- prettier-ignore -->
```html
<form class="form">
  <div class="input">
    <input class="field" type="text" name="name" placeholder="Name">
  </div>
  <div class="input">
    <input class="field" type="email" name="email" placeholder="Email">
  </div>
  <div class="input">
    <input class="field" type="tel" name="phone" placeholder="Phone">
  </div>
  <div class="input">
    <textarea class="field" name="message" placeholder="Message"></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
```

<hr>

### Form Width

Add `form-full` to the `form` and use `max-w` to control the width.

<form class="form form-full max-w-(--container-md)">
  <div class="input">
    <input class="field" type="text" name="name" placeholder="Name">
  </div>
  <div class="input">
    <input class="field" type="email" name="email" placeholder="Email">
  </div>
  <div class="input">
    <input class="field" type="tel" name="phone" placeholder="Phone">
  </div>
  <div class="input">
    <textarea class="field" name="message" placeholder="Message"></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>

<!-- prettier-ignore -->
```html
<form class="form form-full max-w-(--container-md)">
  <div class="input">
    <input class="field" type="text" name="name" placeholder="Name">
  </div>
  <div class="input">
    <input class="field" type="email" name="email" placeholder="Email">
  </div>
  <div class="input">
    <input class="field" type="tel" name="phone" placeholder="Phone">
  </div>
  <div class="input">
    <textarea class="field" name="message" placeholder="Message"></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
```
