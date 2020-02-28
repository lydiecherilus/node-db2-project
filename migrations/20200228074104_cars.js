
exports.up = async function (knex) {
    await knex.schema.createTable("cars", (table) => {
        table.integer("id").notNull().unique().primary()
        table.text("vin", 128).notNull().unique()
        table.text("make", 128).notNull()
        table.text("model", 128).notNull()
        table.integer("mileage", 128).notNull()
        table.text("transmissionType")
        table.text("titleStatus")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("cars")
};
