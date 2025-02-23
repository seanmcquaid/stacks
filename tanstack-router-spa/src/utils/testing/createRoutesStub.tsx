import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import type { ReactElement } from 'react';

interface RouteStub {
  path: string;
  component: () => ReactElement;
  loader?: () => unknown;
}

const createRoutesStub = (routeStubs: RouteStub[]) => {
  const rootRoute = createRootRoute();
  const history = createBrowserHistory();
  const routes = routeStubs.map(({ path, component, loader }) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path,
      component,
      loader,
    }),
  );
  const routeTree = rootRoute.addChildren(routes);
  const router = createRouter({
    routeTree,
    history,
  });

  return () => <RouterProvider router={router as never} />;
};

export default createRoutesStub;
