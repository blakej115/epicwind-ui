---
title: "Theming"
slug: "intro/theming"
---

## Customize Your Project

"Theming" refers to creating customizations for Tailwind UI. Unless you plan to use all of the defaults, you'll want to create a theme.

### Recommended Folder Structure

While this folder structure is not required, it is recommended. You are free to use any folder structure you like.

Note that Epicwind UI does not have any built in base styling, as Tailwind's defaults are great in this regard.

<!-- prettier-ignore -->
```plaintext
theme/
  ├── base/
  │   ├── index.css
  │   ├── links.css
  │   └── ...
  ├── components/
  │   ├── index.css
  │   ├── btns.css
  │   └── ...
  ├── theme/
  │   ├── index.css
  │   ├── defaults.css
  │   └── ...
  ├── utilities/
  │   ├── index.css
  │   ├── grid.css
  │   └── ...
  ├── variants/
  │   ├── index.css
  │   ├── page.css
  │   └── ...
  └── index.css
```

In your `theme/index.css`, you would import all of the folders.

<!-- prettier-ignore -->
```css title="theme/index.css"
@import "./base";
@import "./components";
@import "./theme";
@import "./utilities";
@import "./variants";
```

In each `index.css` file, you would import all of the files in that folder.

```css title="theme/components/index.css"
@import "./btns";
@import "./card";
```

You can simply use Tailwind's built-in [directives](https://tailwindcss.com/docs/functions-and-directives) to customize. Below is an example of customizing the button component.

```css title="theme/components/btns.css"
@layer components {
  .btn {
    @apply rounded-none px-8 py-6 font-bold;
  }

  .btn-custom {
    @apply bg-green-700 text-white hover:bg-green-900;
  }
}
```
