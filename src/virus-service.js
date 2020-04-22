const VirusService = {
  getAllViruses(knex) {
    //gets all the viruses
    return knex.select('*').from('viruses')
    .innerJoin('classification','viruses.family', '=', 'classification.family_id')
  },
  getVirusFam(knex, family) {
    //gets viruses by family
    return knex.select('viruses.virus_name', 'classification.family_name', 'classification.virus_type')
    .from('viruses')
    .innerJoin('classification','viruses.family', '=', 'classification.family_id')
    .where('classification.family_name', family)
  }
};

module.exports = VirusService;
