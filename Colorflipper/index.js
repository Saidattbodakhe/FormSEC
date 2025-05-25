// console.log("Hello World");

const bodycolor = document.getElementsByTagName("body")[0];
console.log(bodycolor);
// bodycolour.style.backgroundColor = "green";

let isColorSelected = false;

function changeColor(name){
    if (!isColorSelected && name === "#ba1900") {
        bodycolor.style.backgroundColor = "#ba1900";
        isColorSelected = true;
    }
    else if( !isColorSelected && name === "#28a745") {
        bodycolor.style.backgroundColor = "#28a745";
        isColorSelected = true;
    }
    else if( !isColorSelected && name === "#007bff") {
        bodycolor.style.backgroundColor = "#007bff";
        isColorSelected = true;
    }
    else if( !isColorSelected && name === "#ffc107") {
        bodycolor.style.backgroundColor = "#ffc107";
        isColorSelected = true;
    }
    
    else {
        bodycolor.style.backgroundColor = "white";
        isColorSelected = false;
    }
}
// changeColor("red");

function randomColor(){
  const  red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const colors = `rgb(${red}, ${green}, ${blue}`;
    bodycolor.style.backgroundColor = colors;
    console.log(colors);
}
// randomColor();



// 

// let rollNumber = 231;
// let name = "John Doe";
// console.log(`Roll Number: ${rollNumber}`);
// console.log(`Name: ${name}`);

// console.log("name"+ rollNumber);
// console.log(rollNumber + name);

// let stringroll = typeof rollNumber;
// console.log(stringroll);




// //primitive store in stack
// let studentName = "Saidatt";
// let studentSirName = studentName;
// studentSirName = "Bodakhe";

// console.table([studentName, studentSirName]);

// //reference type store in heap non-primitive
// let students = {
//     names : "Honeysingh",
//     rollNumber : 231,
//     email : "abc@gmail.com"
// }
// // console.log(students);
// let stringfyStudents = JSON.stringify(students);
// // console.log(stringfyStudents);
// let pasrseStudnets = JSON.parse(stringfyStudents);
// // console.table([students, stringfyStudents, pasrseStudnets]);

// const phoneNumer = new Number(123.456);
// // console.log(phoneNumer.toString())
// // console.log(phoneNumer);
// console.log(phoneNumer.toFixed(1));
// console.log(phoneNumer.toPrecision(1));