"""LandLens ingestion Lambda (Day 4).

Triggered when a CSV lands in the uploads/ prefix of the imports bucket.

Flow to implement:
    1. Read bucket + key from the S3 event (what does an S3 event record look like?).
    2. Download the CSV and parse it (csv module from the standard library is enough).
    3. Validate each row against the same rules as your OpenAPI Parcel schema.
    4. Write valid rows to DynamoDB in batches (boto3 Table.batch_writer).
    5. Write invalid rows + reasons to an errors/ report in S3 — don't fail the whole file.
    6. Log a structured JSON summary: file, rows_ok, rows_failed, correlation id.

Questions to answer before coding:
    - Table name and bucket: hardcode, or read from environment variables? Why?
    - Should boto3 clients be created inside handler() or at module level? (Think cold starts.)
    - S3 can deliver the same event twice. How do you avoid duplicate parcels?
"""


def handler(event, context):
    # TODO (Day 4): implement the flow above
    raise NotImplementedError("Day 4 assignment")
