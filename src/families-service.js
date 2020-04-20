const FamiliesService = {
  getAllFamilies(knex, type) {
    return knex.select('*').from('classification')
      .where('virus_type', type)
  }
};
module.exports = FamiliesService;
