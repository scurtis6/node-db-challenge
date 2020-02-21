
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Computer', resource_description: ''},
        {id: 2, resource_name: 'Conference Room', resource_description: ''},
        {id: 3, resource_name: 'Microphone', resource_description: ''},
        {id: 4, resource_name: 'Delivery van', resource_description: ''}
      ]);
    });
};
