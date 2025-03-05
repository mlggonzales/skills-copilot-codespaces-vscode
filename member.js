function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["HTML", "CSS", "JS"],
        display: function() {
            console.log(this.name + " is " + this.age + " years old. His skills are " + this.skills.join(", "));
        }
    };
    return member;
}