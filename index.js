// Write your solution in this file!
let employee = {
    name: 'Lehane Hamdhi',
    streetAddress: 'Westlands, Nairobi'
  };


  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee={ ...employee,[key]: value  };
    return newEmployee
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }


  

  console.log("Before update:", employee);
  employee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
  console.log("After update:", employee);
  
 
  console.log("Before update:", employee);
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "49 Fifth Ave");
  console.log("After update:", employee);
  

  console.log("Before delete:", employee);
  employee = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("After delete:", employee);
  
  
  console.log("Before delete:", employee);
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("After delete:", employee);