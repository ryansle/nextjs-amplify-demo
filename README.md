This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js & AWS Amplify

Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.

AWS Amplify is a set of tools and services that can be used together or on their own, to help front-end web and mobile developers build scalable full stack applications, powered by AWS. With Amplify, you can configure app backends and connect your app in minutes, deploy static web apps in a few clicks, and easily manage app content outside the AWS console.

Amplify supports popular web frameworks including JavaScript, React, Angular, Vue, Next.js, and mobile platforms including Android, iOS, React Native, Ionic, Flutter. Get to market faster with AWS Amplify.

## Next.js Features

### Image Optimization

<Image> and Automatic Image Optimization with instant builds.

### Internationalization

Built-in Domain & Subdomain Routing and Automatic Language detection.

### Next.js Analytics

A true lighthouse score based on real visitor data & page-by-page insights

### Zero Config

Automatic compilation and bundling. Optimized for production from the start.

### Hybrid: SSG and SSR

Pre-render pages at build time (SSG) or request time (SSR) in a single project.

### Incremental Static Generation

Add and update statically pre-rendered pages incrementally after build time.

### TypeScript Support

Automatic TypeScript configuration and compilation.

### Fast Refresh

Fast, reliable live-editing experience, as proven at Facebook scale.

### File-system Routing

Every component in the `pages` directory becomes a route.

### API Routes

Optionally create API endpoints to provide backend functionality.

### Built-in CSS Support

Create component-level styles with CSS modules. Built-in Sass support.

### Code-splitting and Bundling

Optimized bundle splitting algorithm created by the Google Chrome team.

## AWS Amplify Features

### Configure backends fast

Use the Amplify admin UI and CLI's intuitive workflows to set up scalable AWS backends with authentication, storage, data and other common use cases.

### Seamlessly connect frontends

Use the Amplify libraries in your web, Android, and iOS apps to connect to new and existing AWS resources in just a few lines of code.

### Deploy in a few clicks

Use the Amplify console to host static websites and single page web apps with a Git-based workflow, simply by connecting your app's repository.

### Easily manage content

Use the Amplify admin UI to provide non-developers with administrative access to manage app users and app content without an AWS account.

## Getting Started

First, run an `npm install` to install all the necessary dependencies.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Purpose

Next.js comes with a variety of out-of-the-box capabilities that are overlooked and filled in with external libraries when bootstrapping a new React application with Create React App, or in comparison to customizing your own webpack bundle. Along with this, use of Next.js allows for a wide assortment of useful functions such as **server-side rendering, fast refresh** and more for quicker and easier web development. Next.js, in summary, does everything that other React build configurators do and more.

This demo application was built to highlight Next.js's server-side rendering capabilities coupled with AWS Amplify for user authentication. Authentication is no easy feat when building large-scale web applications, and AWS Amplify solves that problem with its direct link to another AWS service, AWS Cognito. Bundling these two libraries together makes it incredibly easy to iterate quickly without having to dive deep into the nitty-gritty of authentication flow, with things such as confirmation codes, password resetting, and more.

## Dependencies

- Next.js
- AWS Amplify
- Material-UI
- Material-UI Icons
