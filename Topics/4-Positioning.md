# Positioning

### Content

1. How to position elements on a page
2. Layering
3. Display property

## How to position elements on a page

The default positioning of HTML elments on a wab page is from left-to-right and from top-to-bottom.

Elements are by defualt called 'block' elements meaning they take up the full width of the page.

### Position

HTML elements have a property called `position` which is by default set to `static`.

**Position: relative**

This property can be changed to `relative` which allows you to move the HTML element *relative* to the elements static position.

This is achieved by giving the following properties a dimension:

- `top`: moves element from the top in the downwards direction
- `bottom`: moves the element from the bottom in the upwards direction
- `left`: moves the element from the left side in the right direction
- `right`: moves the element from the right side in the left direction

This can be difficult to wrap your head around at first but with practice it becomes easier!

**Position: absolute**

The `position` property can be set to `absolute` which takes the element out of the 'flow' of the web page. It can then be positioned relative to its nearest positioned parent element.

If no parent element is given a `position` property then the `absolute` positioned element will be positioned relative the the document `body`.

Use the same positioning properties as before (`top`, `bottom`, `left`, `right`)

**Position: fixed**

The `position` property can be set to `fixed` to *fix* an element to a certain position on the screen relative to the viewport (usually the screen dimensions).

This means that when you scroll the `fixed` element will not change position and flow with the rest of the elements in the document.

**Position: sticky**

The `position` property can be set to `sticky` which keeps the element in the flow of the document (`relative`) until it reaches a specified position and then becomes `fixed`.

For example, If you set an element to `position: sticky` and it initially renders halfway up the page, when you scroll down, the element will appear normal and move with the page until it reaches the top of the sceen (default position) where it will remain *fixed*.

For more information and examples on the `position` property click [here](https://www.w3schools.com/Css/css_positioning.asp)


## Layering

We can achieve layering of elements on top of each other using the CSS property `z-index`.

This is useful for when you have multiple positioned elements on a web page which may overlap at points.

The lower the value of the `z-index` the further back on the page the element will render.

The higher the value of the `z-index` the further forward on the page the element will render.

The default value is 0 and can be considered flat.

For more information and examples click [here](https://www.w3schools.com/cssref/pr_pos_z-index.asp)

## Display property

HTML elements have a browser default `display` property, depending on the element used.

### Block

Block elements are what we are used to up until this point. They take up the full width of the web page.

For example, `h1` elements exist on their own line.

However, `a` (anchor) elements exist *inline* and are used for giving text a hyperlink within a body of text.

HTML elements which are `block` elements by default can be changed to `inline` like so

```
display: inline;
```

This means that if there are two elements with this `inline` property and there combined width is either smaller than or the same as the web page width, then the two elements can exist on the same horizontal line.

When an elements `display` property is set to `inline` the element width and height cannot be changed and are automatically set to the smallest size which contains the element content.

### inline-block

Elements can be set to have `display` property of `inline-block` like so

```
display: inline-block;
```

This means two elements can exist on the same line, if their widths permit and their display properties are either `inline` or `inline-block`.

The differnece between `inline-block` and `inline` is that `inline-block` elements can have specified widths and height.

This gives `inline-block` elements features of both `inline` elements and `block` elements.

For more information on this click [here](https://www.w3schools.com/Css/css_inline-block.asp)