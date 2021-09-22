var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function eventHandler() {
    var first = document.querySelector("#firstname");
    var middle = document.querySelector("#middleinit");
    var last = document.querySelector("#lastname");
    var user = new Student(first.value, middle.value, last.value);
    div.textContent = greeter(user);
}
var div = document.getElementById("greeter");
var button = document.getElementById("thebutton");
button.addEventListener("click", eventHandler);
