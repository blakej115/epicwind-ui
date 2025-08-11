---
title: "Theme Gutters"
slug: "theme/gutter"
---

## Theme Variables

Gutters are great for standardized spacing between elements, especially for the inside and outside gutters. The spacing here is identical to our <a href="/theme/spacing">Spacing theme variables</a>, but they can be customized to be different.

Spacing variables are also included so they can also be used with Tailwind's default spacing utilities.

<!-- prettier-ignore -->
```css
@theme {
  /* Default gutter */
  --gutter: var(--default-gutter);

  /* Gutters */
  --gutter-2xs: var(--spacing-2xs);
  --gutter-xs: var(--spacing-xs);
  --gutter-sm: var(--spacing-sm);
  --gutter-md: var(--spacing-md);
  --gutter-lg: var(--spacing-lg);
  --gutter-xl: var(--spacing-xl);
  --gutter-2xl: var(--spacing-2xl);

  /* Use as spacing */
  --spacing-gutter: var(--gutter);
  --spacing-gutter-2xs: var(--gutter-2xs);
  --spacing-gutter-xs: var(--gutter-xs);
  --spacing-gutter-sm: var(--gutter-sm);
  --spacing-gutter-md: var(--gutter-md);
  --spacing-gutter-lg: var(--gutter-lg);
  --spacing-gutter-xl: var(--gutter-xl);
  --spacing-gutter-2xl: var(--gutter-2xl);
}
```

---

## Basic Usage

Check out the <a href="/utility/gutter">Gutter utility</a> to see how these can be used as utilities.
