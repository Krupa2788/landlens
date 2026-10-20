# LandLens Parcel Insights

A learning project: a React app, a Node.js API on ECS Fargate and a Python ingestion
Lambda on AWS, deployed with CDK through Azure DevOps.

```
landlens/
├── openapi.yaml        API contract: the single source of truth (Day 1)
├── api/                Node.js + TypeScript + Express  -> ECS Fargate
├── ingest/             Python Lambda: S3 CSV -> DynamoDB
├── web/                React + TypeScript + Vite + TanStack Query -> S3 + CloudFront
├── infra/              AWS CDK (TypeScript)
├── samples/            Sample CSV for imports (includes deliberately bad rows)
├── docker-compose.yml  Local DynamoDB (Day 2)
└── azure-pipelines.yml CI/CD (Day 6)
```

## First-time setup (WSL)

```bash
nvm use                      # Node 22, from .nvmrc
(cd api && npm install)
(cd web && npm install)
(cd infra && npm install)
(cd ingest && python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements-dev.txt)
```

## Check everything runs

| Where    | Command                         | Expect                                     |
|----------|---------------------------------|--------------------------------------------|
| `api/`   | `npm run dev`                   | Listening on :3000 (every route 404s for now) |
| `api/`   | `npm test`                      | 7 todo tests                               |
| `web/`   | `npm run dev`                   | LandLens heading on :5173                  |
| `web/`   | `npm run gen:api`               | `src/api/schema.d.ts` generated            |
| `web/`   | `npm test`                      | 1 passing test                             |
| `ingest/`| `pytest`                        | 4 skipped tests                            |
| `infra/` | `npx cdk synth`                 | An empty template                          |

## The rules

1. Every `TODO (Day N)` is an assignment. Read the questions in the comments before coding.
2. Turn `it.todo` / skipped tests into real tests, ideally **before** the implementation.
3. Contract first: change `openapi.yaml`, then run `npm run gen:api`, then write code.
4. Run `npx cdk destroy` at the end of every AWS session.

## Progress

- [ ] Day 1: contract, Express skeleton, parcels list page
- [ ] Day 2: DynamoDB repository, Docker, add-parcel form
- [ ] Day 3: CDK ECS Fargate, suburb insights, S3 + CloudFront
- [ ] Day 4: Python ingestion Lambda, presigned uploads, import page
- [ ] Day 5: Cognito auth, logging, alarms
- [ ] Day 6: Azure DevOps pipeline, Playwright smoke, Cypress e2e
