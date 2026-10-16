# Skyscanner Backpack Task: Flight Schedule

My solution to the frontend task in the **Skyscanner Software Engineering Job Simulation on Forage** (September 2026).

I built a small **React** web app called **Flight Schedule**, using **Backpack**, Skyscanner's own design system. It shows a calendar so the user can browse months and pick a travel date.

> The backend half of this simulation (a Java/Dropwizard REST API) is in my [hoen-scanner](https://github.com/Jessica-Harwood/hoen-scanner) repo.

## What I built

- **Flight Schedule page:** a header and a heading built with Backpack's `BpkText` component.
- **Date picker:** Backpack's `BpkCalendar` component, set up so that:
  - weeks start on **Monday**
  - dates and month names use **UK formatting** (e.g. "Monday, 21 September 2026")
  - each day has an **accessible label** for screen readers
  - the user can move to the **next and previous month**
- **State management with React hooks:** `useState` keeps track of the month being shown and the date the user selects.
- **Continue button:** Backpack's `BpkButton` component.
- **Styling:** SCSS modules with Backpack's `cssModules` helper.
- **Test:** a simple Jest test that checks the app renders without crashing.

## Tech used

React · JavaScript · Backpack design system · React hooks · SCSS · Node.js / npm · Jest

## How to run

```bash
cd my-app
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## What I learnt

- How to build an interface from an existing design system instead of from scratch, by reading the component documentation and passing the right props
- Using React hooks (`useState`) to manage state when the user interacts with the page
- **Fixing setup problems:** the project at first failed to start because of Node.js version conflicts and dependency issues. I diagnosed and resolved these in the build toolchain so the app would run.
