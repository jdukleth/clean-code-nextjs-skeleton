# Greatest Next.js Skeleton Ever

> Open Source Code by Jason Dukleth

* A clean-code skeleton for Next.js and fullstack development.
* Stays clean no matter how large your project scales.
* Production ready and performant.

## Includes
* Zero-downtime Blue-Green Deployment with `GitHub Actions`
* Configs for `PM2` and `Nginx`
* Authentication with `next-auth`
* State Management with `zustand`
* Themed UI primitives with `@radix-ui/themes`
* Database access/mutations/migrations with `prisma`
* 3rd party API calls using built-in `fetch` + convenience wrapper
* Automated testing with `@cucumber/cucumber`
* Over 150,000 icons available with `@iconify/react`
* Recommended VSCode extensions via `.vscode` folder

## Rules
* BY RULE, default to React Server Components `RSC`.
  * Makes static generation / ISR happen as often as possible
  * Provides a massive performance increase, reduced server load, saved bandwidth costs, caching, etc
* ONLY use isolated, client component [islands](https://docs.astro.build/en/concepts/islands/) for "smallest unit" dynamism
  * Make 'use-client' islands be as small and isolated as possible
* REWIRE your brain to think in `actions`
  * Almost no JS goes into pages/components files.
  * Any actions taken are placed into individual files in the `actions` folder/subfolders
  * Actions tie directly into the `zustand` state management system
  * Even React 18 `server actions` can be organized into the actions folder

## Deployment
* Zero downtime Blue-Green Deployment
* Deploys On:
  * Button click through GitHub Actions tab in its repository page
  * Push to `master` branch
* Relevant files - **GO THROUGH THESE AND REPLACE PLACEHOLDER VARIABLES**
  * `.github/workflows/blue-green-deployment.yaml` used by GitHub Actions
  * `action.yaml` used by GitHub Actions
  * `.config/.pm2/ecosystem.config.js` symlink to your PM2 folder, if desired
  * `.config/.nginx/mydomain.com` symlink to Nginx sites-available/sites-enabled folders
