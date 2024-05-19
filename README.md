# Array Manipulation Project
## Student ID: 11313275

### Task 1:
- Created a JavaScript file named arrayManipulation.js.
- Implemented the processArray function to process an array of numbers as per the given requirements.

#### Example:

const numbers = [7, 8, 9, 12, 15, 20];
const processedArray = processArray(numbers);
console.log(processedArray); // Output: [21, 64, 27, 144, 45, 200]


### Task 2:
- Added the formatArrayStrings function to arrayManipulation.js to modify an array of strings based on the processed numbers.

#### Example:

const strings = ['orange', 'cake', 'lemon', 'date', 'guava'];
const numbers = [3, 4, 9, 16, 15];
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); // Output: ['orange', 'CAKE', 'lemon', 'DATE', 'guava']


### Task 3:
- Created a file userInfo.js and implemented the createUserProfiles function to generate user profiles based on the provided arrays.

#### Example:

const names = ['Anthony', 'Designer', 'Ama'];
const modifiedNames = ['Anthony', 'DESIGNER', 'Ama'];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(profiles);

#### Output:

[
  { originalName: 'Anthony', modifiedName: 'Anthony', id: 1 },
  { originalName: 'Designer', modifiedName: 'DESIGNER', id: 2 },
  { originalName: 'Ama', modifiedName: 'Ama', id: 3 },
]