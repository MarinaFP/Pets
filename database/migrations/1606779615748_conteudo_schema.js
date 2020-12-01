'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConteudoSchema extends Schema {
  up () {
    this.create('conteudos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('conteudos')
  }
}

module.exports = ConteudoSchema
