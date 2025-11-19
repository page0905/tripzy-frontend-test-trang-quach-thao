🚀 Tripzy Frontend Test

A simple travel search UI built with Next.js, React, TypeScript, and TailwindCSS.
Users can search routes, pick dates with a custom calendar, and view results based on URL parameters.

📦 Getting Started

Install
npm install

Run in development
npm run dev

Build
npm run build

Start production
npm start

🧱 Tech Stack

Next.js 16 (App Router)

React 19

TypeScript

TailwindCSS v4

Fully custom UI components (no UI libraries)

📁 Project Structure
src/
├── app/ # pages & layout
├── components/ # form + UI components
├── data/ # static locations
└── public/icons # SVG icons

🧩 Architecture & Key Decisions

Component-based form: inputs split into small reusable components
(From/To, Date, Return Date, Passenger, Tabs).

Custom calendar: a dual-month date picker built directly from the Figma design without using any date libraries.

Client-side routing: form submits user input via URL params → /search?....

Suspense for search page: useSearchParams() wrapped in <Suspense> to work with Next.js 16.

TailwindCSS utilities: fast, consistent styling with minimal custom CSS.
