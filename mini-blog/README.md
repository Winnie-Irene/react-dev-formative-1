# Dev Insights Mini Blog

A lightweight internal blogging platform built with React, TypeScript, and Vite. Employees at Dev Insights can share quick tips, updates, and insights about web development.

## Installation and Setup

This project uses **Vite** as the build tool.

1. Clone the repository:

```bash
git clone https://github.com/Winnie-Irene/react-dev-formative-1.git
cd react-dev-formative-1/mini-blog
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## Component Design Choices

**Functional vs. Class Components:**

I used functional components for all the main UI pieces including the Header, PostList, Post, Footer, and App. Functional components are the modern standard in React and they pair naturally with hooks like useState, which I used for the tag filtering and the like/bookmark interactions. Class components at this point feel unnecessarily verbose for what they offer, and the React documentation itself recommends functional components as the default approach.

The one place I used a class component was inside the withLogger HOC. Since the HOC needs to tap into componentDidMount and componentWillUnmount to log when a component mounts and unmounts, a class component was the most straightforward way to access those lifecycle methods. It made more sense than converting the whole thing to use useEffect just for a wrapper.

**Styling Methods:**

I used three styling approaches across the project:

1. **External CSS files** for the global design tokens (colors, fonts, spacing), the Header component, and the overall page layout including the sidebar grid and filter bar. External CSS keeps shared design values in one place and makes it easy to adjust the overall look without touching component logic.

2. **Styled Components (CSS in JS)** for the Post and Footer components. Since each post card has conditional styling based on the author and the post date, colocating styles with the component logic made the code easier to follow. The $isHighlighted prop controls the background color for highlighted author posts, and the NewBadge styled component only renders when a post is less than 24 hours old.

3. **Inline styles** in the PostList component for the section heading. This was a small, isolated style that did not justify its own stylesheet or styled component.

**Conditional Styling:**

Two forms of conditional styling are implemented. Posts authored by "Irene Winnie" get a soft indigo highlight background to visually distinguish them from other authors. And any post published within the last 24 hours displays a "New" badge next to the title, which is calculated by comparing the post date against the current time.

## Optimization Strategies

1. **React.memo:** The Post component is wrapped in React.memo to prevent unnecessary re renders. When the parent PostList re renders (for example during tag filtering), individual Post components whose props have not changed will skip rendering.

2. **Unique key props:** Each post in the list is rendered with a unique key={post.id}, which helps React efficiently track and update list items in the DOM without unnecessary unmounts and remounts.

3. **withLogger HOC:** I created a Higher Order Component called withLogger that logs to the console whenever a component mounts or unmounts. This is applied to the Post component and is useful for debugging render behavior. The HOC uses a class component internally to access the lifecycle methods, while keeping the wrapped component itself functional.

## External Libraries

| Package | Purpose |
|---------|---------|
| react | UI library |
| react-dom | DOM rendering |
| typescript | Static type checking |
| vite | Build tool and dev server |
| styled-components | CSS in JS styling |

## Project Structure

```
mini-blog/
  src/
    components/
      Header.tsx
      Post.tsx
      PostList.tsx
      Footer.tsx
    hocs/
      withLogger.tsx
    styles/
      global.css
      Header.css
    utils/
      types.ts
    App.tsx
    main.tsx
```

## Challenges and How I Overcame Them

One of the first issues I ran into was TypeScript's verbatimModuleSyntax setting in the Vite template. It requires type only imports to be explicitly marked with the type keyword, which threw errors on my Post type import until I changed it to import type. It was a quick fix once I understood the error, but it caught me off guard coming from setups that do not enforce this.

Getting the conditional styling to feel natural took some experimentation. I wanted highlighted posts to stand out without being distracting, so I went with a subtle indigo tinted background rather than something bold. For the "New" badge, I wrote a helper function that compares the post date against the current time to determine whether the post falls within a 24 hour window.

Integrating styled components with the withLogger HOC and React.memo required some thought about the order of wrapping. The component gets memoized first with React.memo, and then that memoized version gets wrapped with withLogger. This way the HOC can observe when the memoized component actually mounts and unmounts, rather than logging on every render.

The biggest design challenge was landing on a layout that felt like a real platform rather than a homework skeleton. I iterated on the typography, spacing, and layout structure quite a bit before settling on the two column grid with a sidebar, tag filters, and a proper header navigation.