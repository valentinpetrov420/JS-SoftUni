import {Junior, Manager, Senior} from "./peopleclass";

const junior = new Junior("Dexter", 25);
const senior = new Senior("Mike", 31);
const manager = new Manager("John", 34);

junior.salary = 2000;
junior.work();
junior.collectSalary();

senior.salary = 4000;
for (let i = 1; i <= 4; i++) {
    senior.work();
}
senior.collectSalary();

manager.salary = 4000;
manager.dividend = 800;
for (let i = 1; i <= 3; i++) {
    manager.work();
}
manager.collectSalary();