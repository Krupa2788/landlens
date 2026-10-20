# TODO (Day 2): multi-stage build. Fill in each stage yourself.
#
# Stage 1 — "build"
#   - pick a Node base image (which tag? why not just "latest"?)
#   - copy package*.json FIRST, then install (why does order matter for layer caching?)
#   - copy source, run the TypeScript build
#
# Stage 2 — "runtime"
#   - slim base image
#   - install production dependencies only
#   - copy only the compiled output from stage 1 (and openapi.yaml — the validator needs it!)
#   - run as the non-root "node" user
#   - EXPOSE the port and set the start command
