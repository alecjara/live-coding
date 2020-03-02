# Live-coding

## HTML

[24/02/2020](24-02)

Introduction to HTML
- HTML tags, Attributes,
- HTML Document boilerplate
- Basic document structure
- Head: `<meta>`, `<link>`, `<title>`, 
- live-server
- Tables
- Linking: `<a href=" ">`, `target`, `<a href=""#[id- 
- Lists: `<ul>`, `<li>`, `<ol>`
- Images`<img src="[URL]">`
- Introducion to CSS: `<style>`, `<link rel="stylesheet" href="[path-to-file]">`
- Formatting Elements `<strong>`, `<em>`, `<sup>`, `<sub>`, `<b>`, `<i>`, `<mark>`
- Form (action, method="POST"), input

[25/02/2020](25-02)
- Review from 24/02/2020
- HTML + CSS
- Inline styles: DON'T `<p style=""color: red;"">`
- Document styles: SOMETIMES `<style>` tag
- External styles: DO `<link rel="stylesheet" href="[path-to-file]">`
- RGB: concept, `color: rgb([rrr],[ggg],[bbb])`
- Unimportant order: `<ul>`, `<li>`
- Nesting elements and proper indentation: parent - child concept
- CSS descendent combinator (space): `ul li { ... }`
- Important order: `<ol>` are for step by step
- Formatting Elements `<span>`
- Getting a unique element on the page: The `id` attr, `#[id]` selector
- Getting a bunch of stuff but not all: The `class` attr, `.[class]` selector
- Form (method="GET")
- iframe

[26/02/2020](26-02)
- Review from 24 and 25/02/2020 
- The image tag: `<img src=""[URL]"">`
- Image size`width` 
- Framing images: `px` 
- `border: [SIZE] solid [COLOR]`
- Rounding images: `border-radius: [BORDER-SIZE]`, `%` 
  when to use - serif, sans-serif, monospace and cursive
- Pre Installed System fonts: css `font-family: <font-name>`
- Providing fallbacks: font stack values for `font-family`
- Getting more fonts: Google fonts and css `@import`
- Setting text size with `font-size`
- Coloring links on `:hover`
- Separating content units with `<section>`
- Marking related content with `<aside>`
- Self contained content with `<article>`
- Top and bottom of segments: `<header>` and `<footer>`
- Generic boxes with `<div>`
- `<img>` vs. `background-image`, `background-size`, `background-repeat`, `background-position`
- Putting it all together with the `background` shorthand

[27/02/2020](27-02)
- Review from 26/02/2020
- `:hover`, `:active`, `:visited`
- Image links: wrapping `<img>` with `<a>`
- CSS adjacent sibling combinator (+): `img + p { ... }`
- Aligning text with `text-align`
- Centring text: comparison between `center` and `justify`
- Italics with css `font-style`
- Underline and strikethrough with css `text-decoration`
- Changing case with css `text-transform`
- Adding shadow and stroking text with css `text-shadow`
- Setting text size with `font-size`
- `rem` sizing 
- Making sure boxes are the correct width: `box-sizing: border-box`
- Spacing boxes: outside the box with `margin`, inside the box `padding`
- Margins, paddings, width and height on inline elements
- Changing boxes with css `display` and `inline`
- Casting shadows: css `box-shadow`
- Fake boxes: css `:before` and `:after` pseudo elements
- Hiding things with css `visibility` (vs. `display: none;`)
- Making navbars accessible: The `<nav>` element

[02/03/2020](02-03)
Review from last week: HTML and CSS

- element selectors, combining multiple selectors
- CSS adjacent sibling combinator (+): `img + p { ... }`
- pseudo child selectors: `:nth-child() { ... }`
- Browser compatibility 
- Focusing and outlining: `:focus` 
- selecting inputs by type with attribute selectors
- Pseudo-classes
- State pseudo class
-`:hover`, `:active`, `:visited`
- css `:before` and `:after` pseudo elements
- `visibility` (vs. `display: none;`)




