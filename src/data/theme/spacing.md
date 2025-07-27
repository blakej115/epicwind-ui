---
title: "Theme Spacing"
slug: "theme/spacing"
---

## Basic Usage

Epicwind UI includes a naming convention for spacing. You can replace the default spacing in your project.

<!-- prettier-ignore -->
```css
@theme {
  --spacing-2xs: calc(var(--spacing) * 1);
  --spacing-xs: calc(var(--spacing) * 2);
  --spacing-sm: calc(var(--spacing) * 4);
  --spacing-md: calc(var(--spacing) * 8);
  --spacing-lg: calc(var(--spacing) * 16);
  --spacing-xl: calc(var(--spacing) * 32);
  --spacing-2xl: calc(var(--spacing) * 64);
}
```
