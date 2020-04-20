TRUNCATE TABLE classification;

INSERT INTO classification
  (family_name, subfamily, virus_type)
  VALUES
    ('Herpesviridae', 'Alphaherpesvirinae', 'I'),
    ('Herpesviridae', 'Betaherpesvirinae', 'I'),
    ('Herpesviridae', 'Gammaherpesvirinae', 'I'),
    ('Alloherpesviridae', NULL, 'I'),
    ('Malacoherpesviridae', NULL, 'I'),
    ('Adenoviridae', NULL, 'I'),
    ('Papillomaviridae', 'Firstpapillomavirinae', 'I'),
    ('Papillomaviridae', 'Alefpapillomavirinae', 'I'),
    ('Baculoviridae', NULL, 'I'),
    ('Mimiviridae', NULL, 'I'),
    ('Poxviridae', 'Chordopoxvirinae', 'I'),
    ('Poxviridae', 'Entomopoxvirinae', 'I'),
    ('Geminiviridae', NULL, 'II'),
    ('Genomoviridae', NULL, 'II'),
    ('Picornaviridae', NULL, 'IV'),
    ('Caliciviridae', NULL, 'IV'),
    ('Potyviridae', NULL, 'IV'),
    ('Filoviridae', NULL, 'V'),
    ('Orthomyxoviridae', NULL, 'V');
