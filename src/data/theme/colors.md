---
title: "Theme Colors"
slug: "theme/colors"
---

## Basic Usage

Epicwind UI includes a naming convention for colors. You can replace the default colors in your project. You may also add additional colors.

<!-- prettier-ignore -->
```css
@theme {
  /* Brand Colors */
  --color-primary: var(--color-blue-500);
  --color-secondary: var(--color-blue-700);
  --color-accent: var(--color-green-500);
  --color-accent-alt: var(--color-green-700);

  /* Grayscale */
  --color-white: #fff;
  --color-light: var(--color-gray-300);
  --color-neutral: var(--color-gray-500);
  --color-dark: var(--color-gray-700);
  --color-black: #000;

  /* Status Colors */
  --color-success: var(--color-green-500);
  --color-error: var(--color-red-500);
  --color-warning: var(--color-orange-500);
  --color-notice: var(--color-yellow-500);
  --color-info: var(--color-blue-500);
  --color-deprecated: var(--color-purple-500);
  --color-decorative: var(--color-pink-500);
  --color-muted: var(--color-yellow-700);

  /* Variant Hover Background Colors */
  --color-primary-hover: var(--color-blue-600);
  --color-secondary-hover: var(--color-blue-800);
  --color-accent-hover: var(--color-green-600);
  --color-accent-alt-hover: var(--color-green-800);

  --color-white-hover: var(--color-gray-100);
  --color-light-hover: var(--color-gray-400);
  --color-neutral-hover: var(--color-gray-600);
  --color-dark-hover: var(--color-gray-800);
  --color-black-hover: var(--color-gray-900);

  --color-success-hover: var(--color-green-600);
  --color-error-hover: var(--color-red-600);
  --color-warning-hover: var(--color-orange-600);
  --color-notice-hover: var(--color-yellow-600);
  --color-info-hover: var(--color-blue-600);
  --color-deprecated-hover: var(--color-purple-600);
  --color-decorative-hover: var(--color-pink-600);
  --color-muted-hover: var(--color-yellow-800);

  /* Variant Text Colors */
  --color-white-text: var(--color-black);
  --color-light-text: var(--color-black);

  /* Variant Hover Text Colors */
  --color-white-text-hover: var(--color-black);
  --color-light-text-hover: var(--color-white);
}
```

---

## Color Showcase

### Brand Colors

<div class="grid-row-4">
  <div class="button variant-primary flex text-center justify-center items-center aspect-square">
    <h1>Primary</h1>
  </div>
  <div class="button variant-secondary flex text-center justify-center items-center aspect-square">
    <h1>Secondary</h1>
  </div>
  <div class="button variant-accent flex text-center justify-center items-center aspect-square">
    <h1>Accent</h1>
  </div>
  <div class="button variant-accent-alt flex text-center justify-center items-center aspect-square">
    <h1>Accent Alt</h1>
  </div>
</div>

---

### Grayscale Colors

<div class="grid-row-5">
  <div class="button variant-white aspect-square flex justify-center items-center text-center content text-black rounded-md">
    <h1>White</h1>
  </div>
  <div class="button variant-light aspect-square flex justify-center items-center text-center content text-black rounded-md">
    <h1>Light</h1>
  </div>
  <div class="button variant-neutral flex text-center justify-center items-center aspect-square">
    <h1>Neutral</h1>
  </div>
  <div class="button variant-dark flex text-center justify-center items-center aspect-square">
    <h1>Dark</h1>
  </div>
  <div class="button variant-black flex text-center justify-center items-center aspect-square">
    <h1>Black</h1>
  </div>
</div>

---

### Status Colors

<div class="grid-row-4">
  <div class="button variant-success flex text-center justify-center items-center aspect-square">
    <h1>Success</h1>
  </div>
  <div class="button variant-error flex text-center justify-center items-center aspect-square">
    <h1>Error</h1>
  </div>
  <div class="button variant-warning flex text-center justify-center items-center aspect-square">
    <h1>Warning</h1>
  </div>
  <div class="button variant-notice flex text-center justify-center items-center aspect-square">
    <h1>Notice</h1>
  </div>
  <div class="button variant-info flex text-center justify-center items-center aspect-square">
    <h1>Info</h1>
  </div>
  <div class="button variant-deprecated flex text-center justify-center items-center aspect-square">
    <h1>Deprecated</h1>
  </div>
  <div class="button variant-decorative flex text-center justify-center items-center aspect-square">
    <h1>Decorative</h1>
  </div>
  <div class="button variant-muted flex text-center justify-center items-center aspect-square">
    <h1>Muted</h1>
  </div>
</div>
