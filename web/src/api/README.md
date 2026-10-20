# src/api

- `schema.d.ts` is GENERATED from `../../openapi.yaml`. Never edit it by hand.
  Regenerate with `npm run gen:api` whenever the contract changes.
- TODO (Day 1): `client.ts` — a small typed fetch wrapper that uses the generated types.
  Where will the base URL come from locally vs in production? (Hint: `VITE_` env vars, Day 3.)
- TODO (Day 5): attach the Cognito access token to authenticated requests.
