
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments()

      tbl.string('project_name', 255)
      .notNullable()

      tbl.text('project_description')
      tbl.boolean('project_completed').defaultTo(false)
  })
  .createTable('resources', tbl => {
      tbl.increments()

      tbl.string('resource_name')
      .notNullable()

      tbl.text('resource_description')
  })
  .createTable('project_resource', tbl => {
      tbl.primary[('project_id', 'resource_id')]

      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('tasks', tbl => {
      tbl.increments()

      tbl.string('task_description')
      .notNullable()

      tbl.text('task_notes')
      tbl.boolean('task_completed').defaultTo(false)
  })
  .createTable('project_task', tbl => {
      tbl.primary(['project_id', 'task_id'])

      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      tbl.integer('task_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tasks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('project_task')
  .dropTableIfExist('tasks')
  .dropTableIfExist('project_resource')
  .dropTableIfExist('resources')
  .dropTableIfExist('projects')
};
