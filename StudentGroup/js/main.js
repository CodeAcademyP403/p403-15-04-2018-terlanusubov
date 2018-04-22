var inputButton = document.querySelector("#button");
var InputList = document.querySelector("#List");
var Stu = [];
var counter = 1;
var inputName = document.querySelector("#stName");

var dataAdress = 0;
var dataNumber = 0;

inputButton.addEventListener("click", function () {
    var inputNameValue = document.querySelector("#stName").value;
    var inputSurnameValue = document.querySelector("#stsurName").value;
    var inputIdValue = document.querySelector("#stnumber").value;
    var markValue; 
    var countValue = counter++;

    if (parseInt(inputIdValue)) {
        if (parseInt(inputNameValue) || parseInt(inputSurnameValue)) {
            alert("Ad və ya Soyad Duzgun Daxil Edilmemisdir!");
        } else if (inputNameValue == "" || inputSurnameValue == "" || inputIdValue == "") {
            alert("Xanaları Doldurun!");
        }
        else {
            var Student = new studentObj(inputNameValue, inputSurnameValue, inputIdValue, countValue);
            Stu.push(Student);

            for (var i = 0; i < Stu.length; i++) {
                var ListNumber = CreatMarkInput();
                var ListInput = creatInput();
                ListInput.value = Stu[Stu.length - 1].Full();
                InputList.appendChild(ListInput);
                InputList.appendChild(ListNumber);
                // QIYMET INPUTUNUN ACILMASI
                ListInput.addEventListener("click", function (e) {
                    e.target.setAttribute("disabled", true);
                     var dataList = e.target.getAttribute("data-adress");
                     var dataNumberInput = document.querySelector(`[data-number = "${dataList}" ]`);
                     dataNumberInput.style.opacity = "1";
                     markValue = dataNumberInput.value; 
                })
                break;

            }
        }
    }else{
        alert("Tələbə Nömrəsi Düzgün Değil!");
    }


});

// OBJECT STUDENT
function studentObj(_name, _surname, _idNumber, _count,_mark) {
    var name = _name;
    var surName = _surname;
    var idNumber = _idNumber;
    var count = _count;
    var mark = _mark

    this.Full = function () {
        return count + "." + " " + name + " " + surName + " " + idNumber;
    }
};

// FOR CREATING INPUT
function creatInput() {
    var input = document.createElement("input");
    input.classList.add("st");
    input.setAttribute("data-adress", dataAdress++);
    return input;
}
//  QIYMET INPUTU

function CreatMarkInput() {
    var input = document.createElement("input");
    input.classList.add("mark");
    input.classList.add("st");
    input.setAttribute("data-number", dataNumber++);
    return input;
}
