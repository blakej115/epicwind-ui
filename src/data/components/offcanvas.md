---
title: "Offcanvas"
slug: "component/offcanvas"
---

## Basic Usage

Offcanvas menus work great for mobile devices or just to hide the main menu on desktop views. They need a button to trigger it and a box to contain the hidden content.

Because Epicwind UI runs without Javascript, we will use radio buttons to control the toggle function. The radio buttons are hidden and the labels for each sit on top on the buttons so that when you click a button, it marks the input as checked. We can then target the checked radio in the CSS.

<div class="offcanvas not-content">
    <input id="offcanvas-open" class="offcanvas-logic" name="offcanvas-logic" type="radio">
    <input id="offcanvas-close" class="offcanvas-logic" name="offcanvas-logic" type="radio">
    <div class="offcanvas-button">
        <svg width="30" height="32" class="offcanvas-button-bars">
            <path d="M 0 2 H 30 M 0 10 H 30 M 0 19 H 30" stroke="black" stroke-width="3"></path>
        </svg>
        <label class="offcanvas-label" for="offcanvas-open">
        </label>
    </div>
    <div class="offcanvas-content right">
        <div class="offcanvas-inner">
            <div class="offcanvas-close">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5 2 L 25 20 M 25 2 L 5 20" stroke="black" stroke-width="3" />
                </svg>
                <label class="offcanvas-label" for="offcanvas-close"></label>
            </div>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="offcanvas">
  <input id="offcanvas-open" class="offcanvas-logic" name="offcanvas-logic" type="radio" />
  <input id="offcanvas-close" class="offcanvas-logic" name="offcanvas-logic" type="radio" />
  <div class="offcanvas-button">
    <svg width="30" height="32" class="offcanvas-button-bars">
      <path d="M 0 2 H 30 M 0 10 H 30 M 0 19 H 30" stroke="black" stroke-width="3"></path>
    </svg>
    <label class="offcanvas-label" for="offcanvas-open"></label>
  </div>
  <div class="offcanvas-content right">
    <div class="offcanvas-inner">
      <div class="offcanvas-close">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M 5 2 L 25 20 M 25 2 L 5 20" stroke="white" stroke-width="3" />
        </svg>
        <label class="offcanvas-label" for="offcanvas-close"></label>
      </div>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  </div>
</div>
```

---

## Offcanvas on the left

You just need to add switch the 'right' class on the offcanvas-content to 'left'. Note, if you have more than one offcanvas on the page, you will need to update the IDs for the inputs and the corresponding label 'for' attributes.

<div class="offcanvas not-content">
    <input id="offcanvas-open-left" class="offcanvas-logic" name="offcanvas-logic" type="radio">
    <input id="offcanvas-close-left" class="offcanvas-logic" name="offcanvas-logic" type="radio">
    <div class="offcanvas-button">
        <svg width="30" height="32" class="offcanvas-button-bars">
            <path d="M 0 2 H 30 M 0 10 H 30 M 0 19 H 30" stroke="black" stroke-width="3"></path>
        </svg>
        <label class="offcanvas-label" for="offcanvas-open-left">
        </label>
    </div>
    <div class="offcanvas-content left">
        <div class="offcanvas-inner">
            <div class="offcanvas-close">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5 2 L 25 20 M 25 2 L 5 20" stroke="black" stroke-width="3" />
                </svg>
                <label class="offcanvas-label" for="offcanvas-close-left"></label>
            </div>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
            </ul>
        </div>
    </div>
</div>

```html
<div class="offcanvas">
  <input id="offcanvas-open" class="offcanvas-logic" name="offcanvas-logic" type="radio" />
  <input id="offcanvas-close" class="offcanvas-logic" name="offcanvas-logic" type="radio" />
  <div class="offcanvas-button">
    <svg width="30" height="32" class="offcanvas-button-bars">
      <path d="M 0 2 H 30 M 0 10 H 30 M 0 19 H 30" stroke="black" stroke-width="3"></path>
    </svg>
    <label class="offcanvas-label" for="offcanvas-open"></label>
  </div>
  <div class="offcanvas-content left">
    <div class="offcanvas-inner">
      <div class="offcanvas-close">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M 5 2 L 25 20 M 25 2 L 5 20" stroke="white" stroke-width="3" />
        </svg>
        <label class="offcanvas-label" for="offcanvas-close"></label>
      </div>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  </div>
</div>
```
