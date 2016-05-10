
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function(table) {
    table.boolean('positive_score').defaultsTo(false);
    table.boolean('negative_score').defaultsTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function(table) {
    table.dropColumn('positive_score');
    table.dropColumn('negative_score');
  });
};
