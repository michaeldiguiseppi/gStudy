
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function(table) {
    table.string('front_image');
    table.string('back_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function(table) {
    table.dropColumn('front_image');
    table.dropColumn('back_image');
  });
};
