const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

function getRandomUser() {
  let password = faker.internet.password();
  let passwordHash = bcrypt.hashSync(password, 10); //saltRounds=10

  return {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    password: passwordHash,
    role: faker.number.int({ min: 0, max: 3 }),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}

function getUsers(count) {
  return faker.helpers.multiple(getRandomUser, {
    count: count,
  });
}

module.exports = getUsers;
