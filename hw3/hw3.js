/*

Question 1

1. Given the following array and implement the table dynamically(you
need to create the table via JavaScript)

2. And then you should implement a form(focus on the logic only, you
DON'T need to create the form via JavaScript) for taking the some
format input form users(Student Name，Age，Phone,Address). When the
user clicks the Add button, the data will be added into the existing
table(after the existing data), and the user input in the form should
be cleared.

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function insertTd(tr, text, type) {
  const td = document.createElement(type);
  td.textContent = text;
  tr.appendChild(td);
}

function insertTr(tbody, rowText, type) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (const text of rowText) {
    insertTd(tr, text, type);
  }
}

function fillTable() {
  const table = document.getElementById("q1-table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);

  // Insert header row.
  const tr = document.createElement("tr");
  thead.appendChild(tr);
  insertTr(thead, tableInfo.tableHeader, "th");

  // Insert body row.
  for (const row of tableInfo.tableContent) {
    const rowText = tableInfo.tableHeader.map((header) => row[header]);
    insertTr(tbody, rowText, "td");
  }
}

function insertNewRow(event) {
  const form = event.target.parentElement;
  const elements = form.elements;
  const rowText = tableInfo.tableHeader.map((header) => elements[header].value);
  let tbody = document.querySelector("#q1-table tbody");
  insertTr(tbody, rowText, "td");
  Array.from(elements).forEach((elm) => (elm.value = ""));
}

/*

Question 2 Given the array and generate order list and unordered list
dynamically as following:

*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function fillList() {
  const insertLi = (ol, text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ol.appendChild(li);
  };
  const ol = document.querySelector("#q2-ol");
  const ul = document.querySelector("#q2-ul");
  list.forEach((text) => insertLi(ol, text));
  list.forEach((text) => insertLi(ul, text));
}

/*

Question 3 1. Given the array and implement a dropdown list with the
following options dynamically 2. Console the value, when the user
select one option

*/

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function fillSelect() {
  const selection = document.getElementById("q3-select");
  for (const item of dropDownList) {
    let option = document.createElement("option", {
      value: item.value,
    });
    option.textContent = item.content;
    selection.appendChild(option);
  }
}

function logSelection(event) {
  console.log(event.target.value);
}

function setup() {
  fillTable();
  fillList();
  fillSelect();
  document.querySelector("#q1-button").onclick = insertNewRow;
  document.querySelector("#q3-select").onchange = logSelection;
}

onload = setup;
