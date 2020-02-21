
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Project 1', project_description: "", project_completed: false},
        {id: 2, project_name: 'Project 2', project_description: "", project_completed: false},
        {id: 3, project_name: 'Product 3', project_description: "", project_completed: false}
      ]);
    });
};
