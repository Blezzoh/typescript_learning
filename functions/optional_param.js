function print_salary(salary, name) {
    var msg = name ? name + " gets paid " + salary : salary;
    console.log(msg);
}
print_salary(200);
print_salary(1000000, "bron");
