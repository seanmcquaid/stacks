import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import type { ReactElement } from 'react';

const queryClient = new QueryClient();

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
    context: {
      queryClient,
    },
    defaultPreload: 'intent',
    // Since we're using React Query, we don't want loader calls to ever be stale
    // This will ensure that the loader is always called when the route is preloaded or visited
    defaultPreloadStaleTime: 0,
  });

  return () => (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router as never} />
    </QueryClientProvider>
  );
};

export default createRoutesStub;
