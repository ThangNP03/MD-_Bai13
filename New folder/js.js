// Start practice 4
function practice4() {
    let input = document.getElementById('input4').value
    if (Number(input)){
        document.getElementById('output4').innerHTML = input + " là số"
    }else {
        document.getElementById('output4').innerHTML = input + " Không phải là số"
    }
    if(!Number.isNaN(input)){
        return practice4 = true;
    }
    else {
        return practice4 = false;
    }

}
// End  practice

//Start practice 3
function practice3() {
    let number = document.getElementById('input3').value
    total = 1
    for (let i = 1; i < number  ; i++) {
        total *= number
    }
    return document.getElementById('output3').innerHTML = "Giai thừa của " + number +" = " + total
}
//End practice 3

// Start practice 2
function practice2() {
    let pi = Math.PI
    let radius = document.getElementById('input').value
    let area = pi * radius *radius
    let perimeter = radius * 2 * pi

    return document.getElementById('output1').innerHTML= ("Diện tích = " + Math.floor(area) + " Chu vi = " + Math.floor(perimeter))

}
// End practice 2

// Start practice 1
function practice1() {
    userInput = document.getElementById('input').value
    let square = userInput*userInput
    return document.getElementById('output').innerHTML = userInput + "2".sup() + " = " + square
}
// End practice 1