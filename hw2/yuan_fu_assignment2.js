/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleObject(array) {
  return array.map(obj => ({
    quantity: obj.quantity * 2,
    price: obj.price * 2
  }));
}

function filterObject(array) {
  return array.filter(obj => obj.quantity > 2 && obj.price > 300);
}

function sumObject(array) {
  return array.reduce(
    (accum, obj) => accum + obj.quantity * obj.price,
    0
  );
}

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const expectedReturnString =
  'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

function convert(str) {
  return str.trim().split(" ").filter(str => str !== "")
    .map(str => str.replace(/[^a-zA-Z]/g, " ").toLowerCase()).join(" ");
}

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: 'test' },
  { uuid: 5, name: 'test5' },
  { uuid: 3, name: 'test3' },
];

const second = [
  { uuid: 6, role: 'pm' },
  { uuid: 4, role: 'engineer' },
  { uuid: 1, role: 'manager' },
  { uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
  { uuid: 1, role: 'manager', name: null },
  { uuid: 2, role: 'associate', name: 'test' },
  { uuid: 3, role: null, name: 'test3' },
  { uuid: 4, role: 'engineer', name: null },
  { uuid: 5, role: null, name: 'test5' },
  { uuid: 6, role: 'pm', name: null },
];

function merge(array1, array2) {
  let table = new Map();
  for (let elm of array1) {
    table.set(elm.uuid, {...elm, role: null});
  }
  for (let elm of array2) {
    if (table.get(elm.uuid)) {
      table.set(elm.uuid, {...table.get(elm.uuid), role: elm.role});
    } else {
      table.set(elm.uuid, {...elm, name: null})
    }
  }
  let array = Array.from(table.values());
  array.sort((a, b) => a.uuid - b.uuid);
  return array;
}


function test() {
  console.log(doubleObject(itemsObject));
  console.log(filterObject(itemsObject));
  console.log(sumObject(itemsObject));

  console.log(expectedReturnString);
  console.log(convert(string));
  console.log(expectedReturnString === convert(string));

  console.log(expectedReturnArray);
  console.log(merge(first, second));
}