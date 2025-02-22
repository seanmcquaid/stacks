/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';
import { Route as ReactQueryIndexImport } from './routes/react-query/index';
import { Route as ReactHookFormZodIndexImport } from './routes/react-hook-form-zod/index';
import { Route as KitchenSinkIndexImport } from './routes/kitchen-sink/index';
import { Route as ReactQueryIdIndexImport } from './routes/react-query/$id/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const ReactQueryIndexRoute = ReactQueryIndexImport.update({
  id: '/react-query/',
  path: '/react-query/',
  getParentRoute: () => rootRoute,
} as any);

const ReactHookFormZodIndexRoute = ReactHookFormZodIndexImport.update({
  id: '/react-hook-form-zod/',
  path: '/react-hook-form-zod/',
  getParentRoute: () => rootRoute,
} as any);

const KitchenSinkIndexRoute = KitchenSinkIndexImport.update({
  id: '/kitchen-sink/',
  path: '/kitchen-sink/',
  getParentRoute: () => rootRoute,
} as any);

const ReactQueryIdIndexRoute = ReactQueryIdIndexImport.update({
  id: '/react-query/$id/',
  path: '/react-query/$id/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/kitchen-sink/': {
      id: '/kitchen-sink/';
      path: '/kitchen-sink';
      fullPath: '/kitchen-sink';
      preLoaderRoute: typeof KitchenSinkIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-hook-form-zod/': {
      id: '/react-hook-form-zod/';
      path: '/react-hook-form-zod';
      fullPath: '/react-hook-form-zod';
      preLoaderRoute: typeof ReactHookFormZodIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query/': {
      id: '/react-query/';
      path: '/react-query';
      fullPath: '/react-query';
      preLoaderRoute: typeof ReactQueryIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/react-query/$id/': {
      id: '/react-query/$id/';
      path: '/react-query/$id';
      fullPath: '/react-query/$id';
      preLoaderRoute: typeof ReactQueryIdIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/kitchen-sink': typeof KitchenSinkIndexRoute;
  '/react-hook-form-zod': typeof ReactHookFormZodIndexRoute;
  '/react-query': typeof ReactQueryIndexRoute;
  '/react-query/$id': typeof ReactQueryIdIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/kitchen-sink': typeof KitchenSinkIndexRoute;
  '/react-hook-form-zod': typeof ReactHookFormZodIndexRoute;
  '/react-query': typeof ReactQueryIndexRoute;
  '/react-query/$id': typeof ReactQueryIdIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/kitchen-sink/': typeof KitchenSinkIndexRoute;
  '/react-hook-form-zod/': typeof ReactHookFormZodIndexRoute;
  '/react-query/': typeof ReactQueryIndexRoute;
  '/react-query/$id/': typeof ReactQueryIdIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | '/'
    | '/kitchen-sink'
    | '/react-hook-form-zod'
    | '/react-query'
    | '/react-query/$id';
  fileRoutesByTo: FileRoutesByTo;
  to:
    | '/'
    | '/kitchen-sink'
    | '/react-hook-form-zod'
    | '/react-query'
    | '/react-query/$id';
  id:
    | '__root__'
    | '/'
    | '/kitchen-sink/'
    | '/react-hook-form-zod/'
    | '/react-query/'
    | '/react-query/$id/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  KitchenSinkIndexRoute: typeof KitchenSinkIndexRoute;
  ReactHookFormZodIndexRoute: typeof ReactHookFormZodIndexRoute;
  ReactQueryIndexRoute: typeof ReactQueryIndexRoute;
  ReactQueryIdIndexRoute: typeof ReactQueryIdIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  KitchenSinkIndexRoute: KitchenSinkIndexRoute,
  ReactHookFormZodIndexRoute: ReactHookFormZodIndexRoute,
  ReactQueryIndexRoute: ReactQueryIndexRoute,
  ReactQueryIdIndexRoute: ReactQueryIdIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/kitchen-sink/",
        "/react-hook-form-zod/",
        "/react-query/",
        "/react-query/$id/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/kitchen-sink/": {
      "filePath": "kitchen-sink/index.tsx"
    },
    "/react-hook-form-zod/": {
      "filePath": "react-hook-form-zod/index.tsx"
    },
    "/react-query/": {
      "filePath": "react-query/index.tsx"
    },
    "/react-query/$id/": {
      "filePath": "react-query/$id/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
