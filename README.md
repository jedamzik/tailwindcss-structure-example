# TailwindCSS + React structure examples

This repo includes a series of branches which represent different ways to structure your component layout with TailwindCSS.

Based on https://github.com/wobsoriano/vite-react-tailwind-starter.

## `main`: Base Layout based on TailwindUI example

Original layout comes from TailwindUI example: https://tailwindui.com/components/marketing/sections/feature-sections#component-64ac58e032276db96bf343a8d4f332a8.

This branch just includes the base from which we refactor into the other branches.

## `2/component-folder`: Refactor `FeatureSection` to its own component folder

In this branch, we refactor `FeatureSection` to have its own component folder and to use the `FeatureList` and `FeatureListItem` components.

## `3/style-module`: Refactor styles to their own module.css file

We expand on `2/component-folder` to move all styles into its own module file.

## `4/atomic-design`: Move all components into an Atomic Design structure

Based on `2/components-folder`, we structure all components by `atoms`, `molecules` and `organisms` directories.

## Installation

```sh
npm install
```

## Development

```sh
npm run dev
```