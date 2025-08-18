---
title: "Variant Utilities"
slug: "utility/variant"
---

The variant utilities provide an easy way to set the `color`, `background-color`, and hover states for each using CSS variables.

These are generally intended to be used with the [`alert`](/component/alert), [`button`](/component/button), and [`tag`](/component/tag), components, but they can be used on any element.

See the docs for those components for more examples.

## Basic Usage

<button class="variant-default">Default Variant</button>

<!-- prettier-ignore -->
```html
<button class="variant-default">Default Variant</button>
```

---

## Variants

You can use `variant-*` with any color. `color`, and hover states for `color` and `background-color` are automatically included for the built in [Epicwind UI colors](/theme/colors). You must add your own variables otherwise.

### Colors

#### Brand Colors

<button class="variant-primary">Primary Variant</button>
<button class="variant-secondary">Secondary Variant</button>
<button class="variant-accent">Accent Variant</button>
<button class="variant-accent-alt">Accent Alt Variant</button>

<!-- prettier-ignore -->
```html
<button class="variant-primary">Primary Variant</button>
<button class="variant-secondary">Secondary Variant</button>
<button class="variant-accent">Accent Variant</button>
<button class="variant-accent-alt">Accent Alt Variant</button>
```

---

#### Grayscale Colors

<button class="variant-white">White Variant</button>
<button class="variant-light">Light Variant</button>
<button class="variant-neutral">Neutral Variant</button>
<button class="variant-dark">Dark Variant</button>
<button class="variant-black">Black Variant</button>

<!-- prettier-ignore -->
```html
<button class="variant-white">White Variant</button>
<button class="variant-light">Light Variant</button>
<button class="variant-neutral">Neutral Variant</button>
<button class="variant-dark">Dark Variant</button>
<button class="variant-black">Black Variant</button>
```

---

#### Status Colors

<button class="variant-success">Success Variant</button>
<button class="variant-error">Error Variant</button>
<button class="variant-warning">Warning Variant</button>
<button class="variant-notice">Notice Variant</button>
<button class="variant-info">Info Variant</button>
<button class="variant-deprecated">Deprecated Variant</button>
<button class="variant-decorative">Decorative Variant</button>
<button class="variant-muted">Muted Variant</button>

<!-- prettier-ignore -->
```html
<button class="variant-success">Success Variant</button>
<button class="variant-error">Error Variant</button>
<button class="variant-warning">Warning Variant</button>
<button class="variant-notice">Notice Variant</button>
<button class="variant-info">Info Variant</button>
<button class="variant-deprecated">Deprecated Variant</button>
<button class="variant-decorative">Decorative Variant</button>
<button class="variant-muted">Muted Variant</button>
```

## Customizing

You may edit the `--color-*`, `--color-*-hover`, `color-*-text`, and `--color-*-text-hover` variables to overwride these colors.

Note that the [`link`](/utility/link) component uses these variables, but in a different way. See it's docs for more info.

<!-- prettier-ignore -->
```css
  --color-primary: var(--color-green-200)
  --color-primary-hover: var(--color-green-800);
  --color-primary-text: var(--color-white);
  --color-primary-text-hover: var(--color-black);
```
