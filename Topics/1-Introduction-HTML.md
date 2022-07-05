# Introduction to HTML

### Content:

1. What is programming & why is it useful?
2. What is HTML and the browser?
3. What does a HTML page typically contain?

## What is programming & why is it useful?

Programming is a way of telling a computer what to do.

For example, you could use programming to write code which solves a problem.

Code is writen in programming languages *(can you name any?)* consisting of statements. These statements are read by a computer and executed step-by-step to form a set of instructions. Through applying logic, many complex calculations can be executed and problems solved which otherwise would have taken a human much longer!

Being able to communicate with computers via programming languages has enabled many of todays technologies to exist. Everything from apps on your phone to mapping the planet.

## What is HTML and the browser?

HTML stands for **Hyper Text Markup Language** and is used for creating web pages.

*Hypertext* is text displayed on a computer screen.

A *markup language* is a system for adding, formatting and arranging elements in a document. In this case the document is a web page and elements are added using tags.

Modern web pages are made up of **HTML**, **CSS** and usually **JavaScript**.

It is sometimes useful to think of a web page as a person:

- HTML would be the skeleton and provide the structure to the page
- CSS would provide all the features you see such as skin, teeth, hair etc..
- JavaScript would provide the muscle and movement, providing functionality to the page

### Web browsers

Web browsers can read HTML documents and display them on a screen in the desired format.

Some examples of browers include Chrome, Edge, Firefox and Safari.

When a browser *reads* a HTML document it does not display the HTML tags/markup, but uses them to determine how to display the document.

A web browser will also do the same with a CSS or JavaScript document and execute the desired code.

##  What does a HTML page typically contain?

HTML pages are made up of things called elements. An element has an opening tag and a corresponding closing tag which contains a `/`.

For example, `<h1>Big heading</h1>`

The `h1` tag is a *headings* tag and renders on the screen as the largest sized text.

<!-- insert image of table with headings comparison -->

### Page structure

Here is an example of a basic HTML document structure:

```
<!DOCTYPE html>
<html>
  <head>
    <title>My Page Title</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
  </head>
  <body>

  </body>
</html>
```

- `<!DOCTYPE html>` declaration defines that this document is a HTML5 document
- `<html>` element is the root element of a HTML page
- `<head>` element contains *meta* information about the HTML page
- `<title>` element specifies a title for the HTML page (shown in the browser page's tab)
- `<meta>` elements contain the specific *meta* data e.g. `charset="UTF-8"` lets the browser know which character set to use for encoding
- `<body>` element defines the document's body containing all the content you wish to show on the page

Check out this online code editor at [StackBlitz](https://stackblitz.com/edit/web-platform-m2cx4p?file=index.html) to see what a standard HTML page looks like.
  
#### Common HTML elements
  
- `<p>` elements define a paragraph
- `<h1>` elements define the largest heading. This can go to `<h6>` being the smallest heading
- `<div>` elements define *dividers* and are used to help split pages into different sections
- `<img />` elements define an image. Notice this has a `/` tag. This is an example of a *self-closing* element tag.
  
#### HTML tag attributes
  
HTML elements can have *attributes* which provide information about that element. Attributes are added to the opening tag.

For example, `<img src="www.example-image.com" />`
  
`<img />` tags have the `src` or *source* attribute which points the browser to the location of the image file.
  
Image tags can also have:

- `alt` which is good practice to use for **accessibility**. It is displayed when the image cannot load. This should be a short description of what the image shows.
  - This text is also used for screen readers which are used by people who may be visually impaired.
- `width` which specifies the width of the image
- `height` which specifies the height of the image

## Exercises

Before begining the exercises please follow these steps to create your first CodePen:

1.  Open the template from [here](https://codepen.io/futurecodersse/pen/JjLYRXe)  

2.  Click the **fork** button  
![](https://github.com/futureCodersSE/web-dev-one-day/blob/main/Assets/Fork-button.jpg)  
3.  You are ready to edit your first HTML page  

![](https://github.com/futureCodersSE/web-dev-one-day/blob/main/Assets/First-page.jpg)
  
  
Head to this page for the exercises and begin coding!!
