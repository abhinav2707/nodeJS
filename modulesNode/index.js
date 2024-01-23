const person = {
    name: "Lico",
    role: "Frontend Engineer",
  };
  
  function printName() {
    console.log(person.name);
  }
  
  function printRole() {
    console.log(person.role);
  }
  
  module.exports = {
    person,
    printName,
    printRole,
  };