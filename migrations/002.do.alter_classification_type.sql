DROP TYPE IF EXISTS baltimore;
CREATE TYPE baltimore AS ENUM (
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII'
);

ALTER TABLE classification
  ADD COLUMN
  virus_type baltimore NOT NULL;
