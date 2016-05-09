
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table) {
    table.increments();
    table.string('deck_name').notNullable();
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('users');
    table.text('description');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
