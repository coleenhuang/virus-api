ALTER TABLE classification
  DROP COLUMN virus_type,
  DROP COLUMN subfamily;

DROP TYPE IF EXISTS baltimore;
