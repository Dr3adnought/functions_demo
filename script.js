function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

runOp(4, 5, (num1, num2) => num1 + num2, "add");






// function add(num1, num2) {
//     return num1 + num2;
// }

// function sub(num1, num2) {
//     return num1 - num2;
// }

// function mult(num1, num2) {
//     return num1 * num2;
// }

// function div(num1, num2) {
//     return num1 / num2;
// }

// runOp(4, 5, add, "add")
// runOp(3, 0, div, "div")
// runOp(10, 20, sub, "sub")

function runOp(num1, num2, op, opName) {
    if (opName === "div" && num2 === 0) {
        return console.log("Unsafe operation")
    }
    // calling op back => op "callback function"
    console.log(op(num1, num2))
}




// class MyClass{
//     constructor(values){
//         this.numbers = values;
//     }

//     sum() {
//         const array = this.numbers;
//         let sum = 0;
//         for (let index =0; index < array.length; index++) {
//             sum += array[index];
//         }

//         return sum;
//     }

//     listenToClick() {
//         document.getElementById("myBtn").addEventListener("click", function() {
//             document.getElementById("myDiv").innerText = this.sum()
//             alert("Button clicked")
//         });
//     }
// }
// const test = new MyClass([1, 3, 5, 2]);
// test.listenToClick()




// const n1 = 10;
// const n2 = 20;

// const add2 = function(num1, num2) {
//     return num1 + num2
// };

// const arr = [1, 3, 4];


// const res = (num1, num2) => {
//     return num1 * num2;
// };

// console.log(add3(n1, n2));


// function add(num1, num2){
//     return num1 + num2;
// }
