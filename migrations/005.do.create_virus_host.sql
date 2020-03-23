CREATE TABLE virus_host(
  virus_id INTEGER
    REFERENCES viruses(virus_id) ON DELETE CASCADE NOT NULL,
  host_id INTEGER
    REFERENCES host(host_id) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (virus_id, host_id)
);
