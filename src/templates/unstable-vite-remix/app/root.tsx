import './styles/index.css';

/* eslint-disable i18next/no-literal-string */
import { Outlet, Links, LiveReload, Meta, Scripts } from '@remix-run/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from './components/ui/Toaster';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const Root = () => {
  return (
    <html lang="en" className="h-screen w-full">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Vite App" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <title>unstable-vite-remix</title>
        <Links />
      </head>
      <body className="h-screen w-full">
        <div id="root" className="h-screen w-full">
          <QueryClientProvider client={queryClient}>
            <Outlet />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </QueryClientProvider>
        </div>
        <Scripts />
        <LiveReload />
        <noscript>
          Your browser does not support JavaScript or it is not enabled! Please
          re-enable JavaScript in order to use this site.
        </noscript>
      </body>
    </html>
  );
};

export default Root;
