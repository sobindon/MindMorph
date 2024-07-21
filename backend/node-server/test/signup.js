const faker = require('faker');

const generateDummyUser = () => {
  return {
    fullName: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.random.number({ min: 0, max: 3 }),
    avatar: faker.image.avatar(),
    birthdate: faker.date.past().toISOString().split('T')[0], // Format as YYYY-MM-DD
  };
};

// Example usage to generate a dummy user
const dummyUser = generateDummyUser();
console.log(dummyUser);
