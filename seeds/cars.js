
exports.seed = async function (knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: "vinMB01", make: "Mercedes-Benz", model: "C-Class C 250", mileage: 10000, transmissionType: "Automatic", titleStatus: "Clean" },
    { vin: "vinLH01", make: "Lexus", model: "Es Hydrid", mileage: 22000, transmissionType: "Manual", titleStatus: "Clean" },
    { vin: "vinFS", make: "Ferrari", model: "488 Spider", mileage: 5000, transmissionType: "Automatic", titleStatus: "Clean" },
  ])
};
