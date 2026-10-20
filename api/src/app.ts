import express from 'express';

// The app factory. Taking dependencies as parameters is your "manual dependency
// injection": tests pass an in-memory repository, production passes DynamoDB.
//
// TODO (Day 1): decide on a parameter shape, e.g. createApp(deps: { parcelsRepo: ... })
export function createApp() {
  const app = express();
  app.use(express.json());

  // TODO (Day 1): wire express-openapi-validator against ../openapi.yaml
  //   Question to answer first: should validation run before or after your routes?

  // TODO (Day 1): mount your parcels router (see src/routes/)

  // TODO (Day 2): GET /health for the ECS / ALB health check

  // TODO (Day 1): central error-handling middleware (must be registered LAST).
  //   How does its signature differ from normal middleware?

  // TODO (Day 5): pino-http request logging + a correlation id per request

  return app;
}
