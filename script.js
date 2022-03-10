class MyClass{
    constructor(values){
        this.numbers = values;
    }

    sum() {
        const array = this.numbers;
        let sum = 0;
        for (let index =0; index < array.length; index++) {
            sum += array[index];
        }

        return sum;
    }

    listenToClick() {
        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("myDiv").innerText = this.sum()
            alert("Button clicked")
        });
    }
}
const test = new MyClass([1, 3, 5, 2]);
test.listenToClick()









const n1 = 10;
const n2 = 20;

const add2 = function(num1, num2) {
    return num1 + num2
};

const arr = [1, 3, 4];


const res = (num1, num2) => {
    return num1 * num2;
};

console.log(add3(n1, n2));


function add(num1, num2){
    return num1 + num2;
}


