TRUNCATE classification;

INSERT INTO classification
  (family_name, virus_type)
  VALUES
    ('Filoviruses', 'V'),
    ('Herpesviruses', 'I'),
    ('Orthomyxoviruses', 'V'),
    ('Hepadnaviruses', 'VII');

/*INSERT INTO virus
  (virus_name, structure, entry, replication)
  VALUES
    ('Herpes simplex virus (HSV)', 'icosohedral with lipid envelope',
     'Fusion of virion membrane with cell membrane or in endosomes, viral dsDNA injected into nucleus',
    'viral dsDNA circularizes once entering nucleus, replication begins at ori, transitions from theta form to rolling circle replication ');

UPDATE virus set family = 2 where virus_id = 1*/
