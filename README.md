# Spencer Dedrick E-Commerce Clone

Thanks for READING ME.

This is what will be one of my biggest and most ambitions projects yet. I will be creating a "clone" of the Nixon brand website.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

I've come to realize I've been missing that BIG portfolio project. After doing some reasearch I found that an E-Commerce website incorporates several different skillsets all into one product.

I spent some time researching websites that were user friendly, made what I felt was good use of design, and looked great, but presented some elements that would challenge me and allow me to increase my skill set. I ended up landing on nixon.com as it had what I was looking for.

Below you will find see more about my process, what technologies I used, points of success and failure, and what I learned during the development of this project.

I am currently looking for work as a full-time front-end developer please feel free to reach out to me if you would like to work together.

Best,
Spencer Dedrick

### Screenshot

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
- Source Code URL: [Add live site URL here](https://your-live-site-url.com)

## My process

After researching online stores and landing on Nixon I decided to begin researching NPM modules and packages. I'm really starting to realize how powerful NPM is. There are so many different things available that work in really smart ways. I'm sure there is a downside to using so many different packages but I'm sure there is a way to mitigate the impact on performance.

This will be my first project with Styled-Components. I will also be using TailWindCSS.

I started creating my components in a different way than I usually do. Instead of making a new file/component for each element in the site, I decided to include the functions of smaller components in the same file as the main component. See the example below.

function HeaderMenu() {

  <div>example</div>
}

// HEADER CART ICON
function HeaderCart() {

  <div>example</div>
}

function Header() {
return (
<HeaderStyled>
<HeaderMenu/>
<HeaderCart />
</HeaderStyled>
);
}

I built the function for the button components directly into the Header.jsx file. I've found this to be beneficial in that I don't have to have several different files open to edit what is essentially a single component. Also, since I am using styled-components, I can also build all the styles right into the same file.

### Built with

- HTML, CSS, Javscript
- Figma
- Flexbox
- Grid
- Mobile first design
- [React](https://reactjs.org/) - JS library
- [Create React App](https://create-react-app.dev/) - JS Utility
- [CRACO](https://github.com/gsoft-inc/craco) - JS Utility
- [React Router Dom](https://github.com/remix-run/react-router#readme) - React routing utility
- [Tailwind CSS](https://tailwindcss.com/) - CSS Utility
- [react-burger-menu](https://github.com/negomi/react-burger-menu) - CSS Utility
- [react-router-dom](https://github.com/ReactTraining/react-router) - CSS Utility
- [FontAwesome](https://github.com/FortAwesome/react-fontawesome) - CSS Utility

### What I learned

As I mentioned before this is my first time using styled-compoments in a project. I also decided to use TailwindCSS as it provided some quick and easy styling options.

I've also learned how to use several NPM packages that I've previously never used. I want to learn and become familiar with the popular and widely used packages so that I can implement them easily when working on other projects within a team.

Overall this project has been a pleasant experience implementing all that I've learned as well as learning some fun new things along the way.

### Continued development

This is my most ambitious project yet. I will update as needed, but I'm really hoping this will be the project that propels me into a development position.

### Useful resources

- [NPM Trends](https://www.npmtrends.com/) - This site was pretty useful in finding out which NPM packages I should use when choosing between multiple similar packages.

## Author

- Website - [Spencer Dedrick](https://spencerdedrick.com/)
- LinkedIn - [Spencer Dedrick](https://www.linkedin.com/in/spencer-dedrick/)
