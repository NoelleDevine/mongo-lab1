//1
db.people.insertOne({
  first_name: "Noelle",
  last_name: "Devine",
  email: "NoelleDevine@gmail.com",
  gender: "Femmale",
  age: 42,
  state: "Michigan",
  children: [],
});

//2
db.people.insertOne({
  first_name: "David",
  last_name: "Devine",
  email: "NoelleDevine@gmail.com",
  gender: "Femmale",
  age: 42,
  state: "Michigan",
  children: [
    { name: "Ian", age: 12 },
    { name: "Graham", age: 8 },
  ],
});

//3
db.people.updateOne(
  { first_name: "Clarence" },
  { $set: { state: "South Dakota" } }
);

//4
db.people.updateOne(
  { first_name: "Rebecca", last_name: "Hayes" },
  { $set: { email: "" } }
);

//5
