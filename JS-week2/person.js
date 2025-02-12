const person = {
    name: `Elnaz`,
    lastName: `Talebi`,
    birthYear: 1987,
    age: function() {
        return new Date().getFullYear() - this.birthYear
    },
    gender: "Female",
    sayHello: function(){
        return this.gender === "Male" 
        ? `Hello, Mr ${this.name} ${this.lastName} `
        : `Hello, Ms ${this.name} ${this.lastName}`;
    },
    nameReverse: function(){
        let reversName="";
        for(let i= this.name.length -1; i >=0; i--) {
            const char = this.name[i];
            reversName += char;
        }
        return reversName;

    },

      getStudentByAge: function() {
        const studentsAge = {};
        for (let i =0; i < students.length; i ++){
            const {age, name } =students[i];
            if (!studentsAge[age]){
                studentsAge[age] = [name]
            } else {
                studentsAge[age].push(name)
            }
        }
        return studentsAge
      }


}
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 23 },
    { name: "Eva", age: 22 },
    { name: "Frank", age: 20 },
    { name: "Grace", age: 21 },
    { name: "Hannah", age: 21 },
    { name: "Ivy", age: 22 },
    { name: "Jack", age: 20 }
  ]
console.log(person.age());
console.log(person.sayHello());
console.log(person.nameReverse());
console.log(person.getStudentByAge());  // there are 4 times students with age 20 , and.... 




