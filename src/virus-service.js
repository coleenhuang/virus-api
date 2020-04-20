const virusService = {
  getAllViruses(knex) {
    return knex.select('*').from('viruses')
  }
  getVirusFam(knex, family) {
    //Gets viruses by family_id
    //Involves a foreign key
    return knex.select('*').from('viruses')
  }
}
