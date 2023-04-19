
let readvalue = (button) => {
    let buttonvalue = button.innerHTML;

    console.log(buttonvalue);

    let answertext = document.getElementById("typed").innerHTML;

    answertext+=buttonvalue;

    document.getElementById("typed").innerHTML = answertext;
}




let clearC = () => {
    document.getElementById("answer").innerHTML = "";
}
let clearCE = () => {
    document.getElementById("answer").innerHTML = "";

    document.getElementById("typed").innerHTML = "";
}

let calculate = () => {
    let number = document.getElementById("typed").innerHTML;

    console.log(number);

    let opindex, num1, num2, sum;

    console.log(opindex);
    console.log(num1);
    console.log(num2);
    console.log(sum);

    

    if(number.includes("∗")){
        opindex = number.indexOf("∗");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = num1*num2;
    }
    else if(number.includes("−")){
        opindex = number.indexOf("−");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = num1-num2;
    }
    else if(number.includes("∕")){
        opindex = number.indexOf("∕");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = num1/num2;
    }
    else if(number.includes("+")){
        opindex = number.indexOf("+");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = num1+num2;
    }
    else if(number.includes("%")){
        opindex = number.indexOf("%");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = (num1*num2)/100;
    }
    else if(number.includes("√")){
        opindex = number.indexOf("√");
        num1 = parseFloat(number.slice(0, opindex));
        num2 = parseFloat(number.slice(opindex+1, number.length));
        sum = Math.sqrt(num2);
    }

    document.getElementById("answer").innerHTML  = sum;

}