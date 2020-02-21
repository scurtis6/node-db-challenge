
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'Interview', task_notes: '', task_completed: false},
        {id: 2, task_description: 'Go shopping', task_notes: '', task_completed: false},
        {id: 3, task_description: 'Buy tools', task_notes: '', task_completed: false}
      ]);
    });
};
