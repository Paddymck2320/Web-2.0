var student = {
    iD : 5600264628,  
    name : "Patrick Mckiernan",
    address : "Bastardstown," + "\n" + "Co.Wexford",
    grades : [54, 63, 78],

    addGrade: function(grade){
        this.grades.push(grade);
    },
    getAverage: function(grade,grades){
        var c = 0;
        for(var i = 0; i < this.grades.length; i++)
        {
            c += this.grades[i];
        }
        return (c/this.grades.length).toFixed(2);
    },
    toString: function(){
        return  "ID: " + this.iD + "\n" +"Name: " + this.name + "\n" +"Address: " + this.address + "\n" + "Grades: " + this.grades + "\n" + "Average: " + this.getAverage(); 
    }
}

student.addGrade(59);
student.addGrade(44);
student.addGrade(88);
alert(student.toString());
