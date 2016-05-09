
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
    table.increments();
    table.integer('deck_id');
    table.foreign('deck_id').references('id').inTable('decks');
    table.string('question').notNullable();
    table.string('answer').notNullable();
    table.text('img_url');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
