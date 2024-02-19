
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Function to calculate the average salary of all employees
function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / employees.length;
}

// Function to find employees in a specific department
function findEmployeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

// Function to increase salary for all employees by a percentage
function increaseSalary(employees, percentage) {
    employees.forEach(employee => {
        employee.salary *= (1 + percentage / 100);
    });
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}

// Example usage:

// Create some employee objects
const employees = [
    new Employee("Alice", 30, "HR", 50000),
    new Employee("Bob", 35, "IT", 60000),
    new Employee("Charlie", 25, "Marketing", 45000),
    new Employee("David", 40, "IT", 70000)
];

// Calculate the average salary of all employees
console.log("Average Salary:", calculateAverageSalary(employees));

// Find employees in the IT department
console.log("Employees in IT department:", findEmployeesInDepartment(employees, "IT"));

// Increase salary for all employees by 10%
increaseSalary(employees, 10);

// Sort employees by age
console.log("Sorted Employees by Age:", sortEmployeesByAge(employees));
