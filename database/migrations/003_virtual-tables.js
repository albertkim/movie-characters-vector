module.exports.up = async (knex) => {

  await knex.raw(`
    CREATE VIRTUAL TABLE if not exists vss_characters USING vss0(
      character_id INTEGER PRIMARY KEY,
      character_journey_vector(1536)
    );
  `)

}

module.exports.down = async () => {

}