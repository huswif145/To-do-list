#! usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let add_person = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Add a person in your to do list"
        },
        {
            name: "confirm",
            type: "confirm",
            message: "confirm you add this person?",
            default: "false"
        },
    ]);
    todos.push(add_person.todo);
    condition = add_person.confirm;
    console.log(todos);
}
