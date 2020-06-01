## Felicity: Up-to-date FX Currency Rates

Live version is available at https://blog.aindoria.com/felicity

Welcome to Felicity, a project I whipped up during a Saturday and Sunday night, as part of building up my portfolio. This is a very messy code, so if you delve in, you've been warned. I will get to refactoring it in nearby future, but as of now, it works.

### Tools used

The following tools have been used for this:

- React

- [FlickerText](https://www.npmjs.com/package/react-flicker-text)(native implementation of react-flicker-text as I did not want to modify my babel scripts by ejecting the CRA)

- particles-bg

- node-sass

- gh-pages for publication

### Installation

If you'd like to install this on your computer, simply clone the project, navigate to the directory and type `npm install`

### Future To-dos

- Truncate currencies to four digits or less.
- Implement a dynamic background based on day-and-night cycle
- Fix the messy `fetch` code and `useEffect()` react-hook.
- Implement historical rate graphs
