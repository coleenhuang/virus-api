const ArticlesService = {
  getAllFamilies(knex) {
    return knex.select('*').from('classification')
  }
};
module.exports = ArticlesService;
