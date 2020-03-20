const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')

describe.only('Classification Endpoints', function() {
  let db;

  before('make knex instance', ()=>{
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db('classification').truncate())

  context('given that there are entries in the database', () =>{
    const testFamilies = [
      {
        family_id: 1,
        family_name: 'Coronaviruses',
        virus_type: 'IV'
      },
      {
        family_id: 2,
        family_name: 'Bunyaviruses',
        virus_type: 'V'
      },
      {
        family_id: 3,
        family_name: 'Reoviruses',
        virus_type: 'III'
      },
      {
        family_id: 4,
        family_name: 'Poxviruses',
        virus_type: 'I'
      }
    ];
    beforeEach('insert entries', () => {
      return db
        .into('classification')
        .insert(testFamilies)
    })
  })

  it('GET /family responds with 200 and all of the entries', ()=>{
    return supertest(app)
      .get('/family')
      .expect(200)
      // TODO: add more assertions about the body
  })
})
