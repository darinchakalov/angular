abstract class Employee {
	public name: string;
	public age: number;
	public salary: number;
	public tasks: String[];
	private currentTask: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.salary = 0;
		this.tasks = [];
		this.currentTask = 0;
	}
	public work(): void {
		console.log(this.tasks[this.currentTask]);
		this.currentTask++;
		if (this.currentTask >= this.tasks.length) {
			this.currentTask = 0;
		}
	}

	public collectSalary(): void {
		console.log(`${this.name} received ${this.salary} this month`);
	}
}

class Junior extends Employee {
	constructor(name: string, age: number) {
		super(name, age);
		this.tasks.push(` is working on a simple task`);
	}
}

class Senior extends Employee {
	constructor(name: string, age: number) {
		super(name, age);
		this.tasks.push(` is working on a complicated task.`);
		this.tasks.push(` is taking time off work.`);
		this.tasks.push(` is supervising junior workers.`);
	}
}

class Manager extends Employee {
	public divident: number;
	constructor(name: string, age: number) {
		super(name, age);
		this.divident = 0;
		this.tasks.push(` scheduled a meeting`);
		this.tasks.push(` is preparing a quarterly report`);
	}

	public getSalary(): number {
		return this.salary;
	}

	public collectSalary(): void {
		console.log(`${this.name} received ${this.salary + this.divident} this month`);
	}
}


let man = new Manager('Ivan', 50)
