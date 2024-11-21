import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://4cd7a85fbc0a600d885b8ffbdade0326@o4507305244033024.ingest.us.sentry.io/4508325145542656',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
})
