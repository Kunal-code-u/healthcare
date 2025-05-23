// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://42f0052dd9f9f71a32c807915ee0c8c0@o4509105802051585.ingest.de.sentry.io/4509105805394000",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
