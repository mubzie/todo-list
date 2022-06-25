const task = [];

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const task1 = new Todo('My day', 'hmm, okay oo', '25-06-2022', 'low');
const task2 = new Todo('My week', 'hmm, okay oo sha', '25-07-2022', 'middle');
const task3 = new Todo('My month', 'hmm, okay oo na', '25-08-2022', 'high');
task.push(task1, task2, task3);
console.log(task1);
console.log(task2);
console.log(task3);
console.log(task);