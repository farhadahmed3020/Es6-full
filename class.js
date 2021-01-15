class Student{
    constructor(Id,Name,Uv){
      this.id = Id;
      this.name = Name;
      this.varsity = Uv;
      this.age = 21;

    }
}

const student1 = new Student(22,"Farhad Ahmed","AUST");
const student2 = new Student(20 ,"Eva  Moni","Jnu");
console.log(student1,student2);
console.log(student1.name , student2.name);