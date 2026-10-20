// Entry point: builds the app and starts listening.
// Kept separate from app.ts so tests can import the app WITHOUT opening a port.
import { createApp } from './app';

const port = Number(process.env.PORT ?? 3000);
const app = createApp();

const server = app.listen(port, () => {
  console.log(`LandLens API listening on http://localhost:${port}`);
});

// TODO (Day 2): handle SIGTERM gracefully.
//   ECS sends SIGTERM before stopping a task. What should happen to in-flight requests?
//   Hint: look at server.close().
void server;
