import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';

// One stack for the whole project keeps teardown simple: `npx cdk destroy`.
// As it grows, consider splitting into constructs (e.g. lib/constructs/api.ts) — not stacks.
export class LandlensStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // TODO (Day 3) Networking: VPC, 2 AZs, NO NAT gateway (cost). Why is that OK for a demo only?
    // TODO (Day 3) Data: DynamoDB parcels table (on-demand billing).
    //   Which removal policy for a throwaway demo vs production?
    // TODO (Day 3) Secret: a Secrets Manager secret injected into the container.
    // TODO (Day 3) API: Node API on ECS Fargate behind an ALB (look at aws-ecs-patterns).
    //   Health check -> /health. Least-privilege table access on the TASK role.
    // TODO (Day 3) Web: S3 bucket (private) + CloudFront with Origin Access Control.

    // TODO (Day 4) Imports bucket + Python ingestion Lambda + S3 event notification (uploads/ prefix)
    //   Permissions: Lambda -> read uploads/, write errors/, write table. API -> presign PUT on uploads/.

    // TODO (Day 5) Cognito user pool + app client
    // TODO (Day 5) CloudWatch alarms (ALB 5xx, latency, Lambda errors) -> SNS email topic

    // TODO: CfnOutputs for the ALB URL, CloudFront URL and user pool ids
  }
}
