let isTrue: boolean = true;

class Person {
	//name: string; there is no need for this declaration as we place the public identifier below
	//age: number;

	constructor(public name: string, private age: number) {
		// this.name = name;
		// this.age = age;
		//the above are not needed as well due the public/private/protected declarations above
	}

	getAge() {
		return this.age;
	}
}

const ivan = new Person("Ivan", 30);

class Animal {
	move(distanceInMeters: number = 0): void {
		console.log(`Animal moved ${distanceInMeters}`);
	}
}

class Dog extends Animal {
	bark(): void {
		console.log("Woof! Woof!");
	}
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

function printLabel(labelObject: { label: string }) {
	console.log(labelObject.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabeledValue {
	label: string;
}

function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>("myString");
let output2 = identity(5)
