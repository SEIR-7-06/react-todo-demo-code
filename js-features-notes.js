const chairs = ['bar stool', 'office chair', 'arm chair'];
const tables = ['coffee table', 'dining table', 'desk'];
const newItem = 'dining chair';

// chairs.push(newItem);
// console.log(chairs);

// Spread Operator (...) - Takes the values inside of the array and SPREADS them into the new array.
const updatedChairs = [...chairs, newItem];

const allItems = [...updatedChairs, ...tables];

// console.log(allItems);

// console.log(updatedChairs);

////////////////////////////////////////////////////////////////////
// Spread Operator (...) - Takes the values inside of the object and SPREADS them into the new object. Allows us to combine many objects into one.
const person = {
  firstName: 'Charles',
  lastName: 'Smith',
  hometown: 'San Diego, CA'
}

const updates = {
  firstName: 'Fred',
  hometown: 'New York, NY',
  hobbies: ['coding', 'snorkeling', 'snowboarding']
}

const updatedPerson = {
  ...person,
  ...updates
}


updatedPerson.hobbies = [...updatedPerson.hobbies, 'welding']

console.log(updatedPerson);