"""Tests for the ingestion Lambda using moto (no real AWS).

Hint: a pytest fixture can start moto, create the bucket + table, and set env vars.
"""
import pytest

pytestmark = pytest.mark.skip(reason="Day 4 — write these tests first, then implement")


def test_valid_csv_writes_all_rows_to_dynamodb():
    ...


def test_malformed_row_is_reported_and_others_still_load():
    ...


def test_empty_file_writes_nothing_and_does_not_crash():
    ...


def test_same_event_twice_does_not_duplicate_parcels():
    ...
