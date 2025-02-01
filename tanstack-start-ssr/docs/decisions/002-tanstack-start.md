# TanStack Start

Date: 2024-02-01

Status: accepted

## Context

Most React applications require client-side routing to manage navigation and handle different views within the application. TanStack Start was created by Tanner Linsley to provide a simple and easy-to-use framework for React applications that require server-side rendering (SSR) and client-side routing. It has a great developer experience and provides a lot of features out of the box, such as code splitting, data fetching with loaders,and server functions that act as RPC endpoints.

## Decision

We will use TanStack Start for this template since this is primarily targetted at a React SSR application.

## Consequences

There is a small amount of additional overhead to use TanStack Start over other React SSR frameworks, but the benefits of using TanStack Start outweigh the cons in most cases.
