# AnimeFinder

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Features

Navbar: Navigate easily between Home, Quiz, Recommendations, Contact Us, and Waifu pages.
Poll Component: Participate in anime polls with real-time updates.
Anime Slider: View dynamic slides of top anime recommendations.
Sidebar: Discover additional resources and links.
Quiz: Get personalized anime recommendations based on your answers.
Contact Page: Submit feedback or queries.
Waifu Gallery: Browse categorized anime character images.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Daily Logs

# Day 1 Log

Tasks Completed:

Set up the Next.js project using create-next-app.
Created the Navbar component with navigation links for Home, Quiz, Recommendations, Contact Us, and Waifu pages.
Configured the root layout.js with <html> and <body> tags for proper rendering.
Added global styles via globals.css.
Implemented the basic structure of the homepage, including the Navbar, Poll, and Sidebar components.


Challenges and Solutions:

Challenge: Missing <html> and <body> tags in the root layout.
Solution: Added these tags in layout.js to comply with Next.js requirements.
Challenge: Errors with Link components in the Navbar due to incorrect prop usage.
Solution: Replaced the to prop with href as required by Next.js Link components.
Challenge: Import issues with globals.css.
Solution: Corrected the file path and successfully imported the stylesheet.


Learnings and Insights:

Learned about structuring the root layout.js file and the significance of wrapping all content with <html> and <body> in Next.js.
Improved understanding of the differences between react-router-dom and Next.js Link components.
Gained insights into managing global styles with globals.css.


Next Steps:

Develop and integrate the Poll component.
Build the AnimeSlider component to showcase featured anime dynamically.
Create the Sidebar for additional navigational elements.
Plan and draft the Quiz and Recommendations pages.
```
