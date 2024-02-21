import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: '',
  tracesSampleRate: 1.0
})

throw new Error('Test Saulo')
