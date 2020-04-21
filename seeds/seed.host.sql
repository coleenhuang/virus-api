TRUNCATE TABLE host RESTART IDENTITY CASCADE;

INSERT INTO host
  (host_name, host_type)
  VALUES
    ('human', 'human'),
    ('plant', 'plant'),
    ('cow', 'vertebrate'),
    ('amoeba', 'eukaryotic microorganism');
