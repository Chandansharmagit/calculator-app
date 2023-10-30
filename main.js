//function to show the value in the input

var chandan_sharma = document.getElementById('result')
var sharma_class = document.getElementById('')

function addToResult(value){
    //document.getElementById('result').value += value
    chandan_sharma.value += value
}


//function to add the value in the form

function calculate(){
   var classy_person = document.getElementById('result').value
   var classy_name = eval(classy_person)
   document.getElementById('result').value = classy_name
}


//function to the delate the single data from the input text
function backspace(){
    //use of substring to delate the user data
    var world = document.getElementById('result').value;

    document.getElementById('result').value = world.substring(
        0,
          world.length -1
    )
}

//function to delate the value from the input

function clearResult(){
    document.getElementById('result').value = '';
}

 