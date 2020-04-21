TRUNCATE TABLE viruses RESTART IDENTITY CASCADE;
INSERT INTO viruses
  (virus_name, family)
  VALUES
    ('Influenza A virus', 19),
    ('Norovirus', 16),
    ('Poliovirus', 15),
    ('Herpes Simplexvirus', 1),
    ('Potyvirus', 17);
