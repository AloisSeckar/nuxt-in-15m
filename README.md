# nuxt-in-15m

Example of a very simple Nuxt appliacation that should be set up and running live on Netlify in only 15 minutes. 

It was shown during a live coding session at [PragVue 2024 conference](https://pragvue.com/).

## Prerequisities

- Node.js
- VS Code
- Working GitHub account
- Connected GithHub account to Netlify

## Scenario

- `npx nuxi@latest init -t ui nuxt-in-15m` (https://ui.nuxt.com/getting-started/installation#use-nuxt-starter)
- `pnpm dev`
- `localhost:3000`
- install pinia via DevTools
- create `composables/usePollStore`
- add `usePollStore` into `app.vue`
- display upvote/downvote values
- add +1 hardcoded in script setup
- move it into function and trigger it by button
- make similar function for downvote (as const)
- add computed "score"
- add some tailwind styles
- add button icons
- add computed style for "score" color
- publish project to Git
- connect it from Netlify
- publish to Netlify
