class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

function eventHandler(){
    const first = document.querySelector("#firstname") as HTMLInputElement;
    const middle = document.querySelector("#middleinit") as HTMLInputElement;
    const last = document.querySelector("#lastname") as HTMLInputElement;
    let user = new Student(first.value, middle.value, last.value);
    div.textContent = greeter(user);
}


let div = document.getElementById("greeter");
let button = document.getElementById("thebutton");
button.addEventListener("click", eventHandler);