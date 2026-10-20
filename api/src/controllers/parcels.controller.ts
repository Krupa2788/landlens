// Controller layer: translates HTTP <-> service calls.
// Reads params/body, calls the service, chooses status codes. Knows nothing about DynamoDB.
//
// TODO (Day 1): one handler per operation in openapi.yaml
//   Question: which status code for "created"? For "not found"?
export {};
