const { expect } = require('chai')
const knex = require('knex')
const app = require('../src/app')
const { makeFamiliesArray } = require('./families.fixtures.js')

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
  afterEach('cleanup', () => db('classification').truncate())

  describe('GET /family', () => {
    context(`Given no families`, () => {
     it(`responds with 200 and an empty list`, () => {
       return supertest(app)
         .get('/family')
         .expect(200, [])
     })
   })

    context('given that there are entries in the database', () =>{
      const testFamilies = makeFamiliesArray()
      beforeEach('insert entries', () => {
        return db
          .into('classification')
          .insert(testFamilies)
      })

      it('responds with 200 and all of the entries', ()=>{
        return supertest(app)
          .get('/family')
          .expect(200, testFamilies)
      })
    })
  })


})
