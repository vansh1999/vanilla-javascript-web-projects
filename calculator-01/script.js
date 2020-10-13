
// function getHistory(){
//     return document.getElementById('history-value').innerText;
// }

// function printHistory(num){
//     document.getElementById('history-value').innerText = num;
// }


function getOutput(){
    return document.getElementById('output-value').innerHTML;
}

function printOutput(num){
    document.getElementById('output-value').innerHTML = num;
}



var operator = document.getElementsByClassName("operator")


for(var i = 0  ; i < operator.length ; i++ ){
    operator[i].addEventListener('click' ,  function(){
        
        if(this.id == "clear"){
            // printHistory("");
            printOutput("");
        }

        else if (this.id == "backspace"){
                var output = getOutput().toString();
                if(output){
                    output = output.substr(0, output.length - 1);
                    printOutput(output);
                }
        }

        else if(this.id == "="){
            var output = getOutput();
            var result = eval(output);
            printOutput(result);
        }

        else{
            var output = getOutput();
            output = output + this.id;
            printOutput(output);

        }

        

    })
}



var number = document.getElementsByClassName('number')

for(var i = 0 ; i < number.length ; i++ ){
    number[i].addEventListener('click' , function(){
        
        var output = getOutput();
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }


    } ) 
}





