const project = [];

class Project {
    constructor(title) {
        this.title = title;
    }
}

const project1 = new Project('new life');
const project2 = new Project('new destiny')

project.push(project1, project2);

console.log(project1, project2);

console.log(task);