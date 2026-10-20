// CDK "assertion" tests: synthesise the stack and check the CloudFormation template.
// Great for proving security rules, e.g. "the web bucket is never public".
// Docs to read: aws-cdk-lib/assertions -> Template.fromStack, hasResourceProperties, resourceCountIs
describe('LandlensStack', () => {
  it.todo('creates exactly one DynamoDB table with on-demand billing');
  it.todo('blocks all public access on the web bucket');
  it.todo('creates no NAT gateways');
});
