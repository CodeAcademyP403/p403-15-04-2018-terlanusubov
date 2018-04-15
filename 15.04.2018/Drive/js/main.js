//  CLOSURE EXAMPLE

// var allMains = document.querySelectorAll('main');

// for (var i = 0; i < allMains.length; i++) {
//     (function() {
//         var j = i;
//         allMains[j].addEventListener("click", function () {
//             alert(j+1);
//         });
//     }())
// }


// (function yazdir(soz) {
//     console.log(soz);
// }("Yaz ginen!"))



// OBJECT EXAMPLE
var stu1 = {
    name: "Huseyn",
    surname: "X",
    age: 25,
    email: "x@xmen.com",
    getFullName: function(){
        return this.name + " " + this.surname + " " + this.age;
    }
}

var _ID = 1;

function Student(_name, _surname, _email, _age){
    // object private properties
    var name = _name;
    var Scores = [];
    var ID = _ID++;

    // object public properties
    this.surname = _surname;
    this.email = _email;
    this.age = _age;
    
    

    //object public methods
    this.getFullInfo = function(){
        return name + " " + this.surname + " " + this.email + " " + this.age;
    };
    this.getName = function(){
        return name;
    };
    this.getID = function(){
        return ID;
    };
    this.addScore = function(score){
        if(typeof score == "number" && score >= 0 && score <= 100)
            Scores.push(score);
    };
    this.showScore = function(){
        return Scores.length == 0 ? "There is no Score yet." : "Scores: " + Scores.join(",");
    };
    this.GPA = function(){
        var gpa = 0;
        if(Scores.length > 0){
            for(var score of Scores){
                gpa += score;
            }
            gpa /= Scores.length;
        }
        return gpa;
    }
}

var nicat = new Student("Nicat", "Abdullayev", "nicat@code.az", 20);
var nicat2 = new Student("Nicat", "Abdullayev", "nicat@code.az", 20);
var nicat3 = new Student("Nicat", "Abdullayev", "nicat@code.az", 20);

nicat.addScore(12);
nicat.addScore(37);

console.log(nicat.showScore());
console.log(nicat.GPA());



