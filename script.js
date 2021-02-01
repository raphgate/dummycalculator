let screen=document.getElementById("screen");
let value=document.querySelectorAll('.btn');
let operator=document.querySelectorAll('.opr');
let result=document.querySelectorAll('.result');

let expression={
    valueBefore:0,
    operator:'',
    valueAfter:0,
    newValue:0
}
//value button
for (eachButton of value){
//--
eachButton.addEventListener('click', eachButtonFunction)


}
//operator
for(eachOperator of operator){
    eachOperator.addEventListener('click', operatorFunction);
}
//--

//equals to button
for(total of result){
    total.addEventListener('click',resultFunction);
}
//-------------

function eachButtonFunction(e){    
    e.preventDefault();    
    if(expression.operator===''&&expression.valueAfter===0){
    buttonValue=e.target.value
    screen.value+=buttonValue
    expression.valueBefore=parseFloat(screen.value)
      
}

if(expression.operator!==''){
    buttonValue=e.target.value
    screen.value+=buttonValue
    expression.valueAfter=screen.value
    let position=expression.valueAfter.lastIndexOf(expression.operator)
    expression.valueAfter=expression.valueAfter.slice(position+1) 
    expression.valueAfter=parseFloat(expression.valueAfter) 
    
    
    
}
    
}

function operatorFunction(e){
    
    if (expression.valueBefore!==0&&expression.operator!==''&&expression.valueAfter!==0){
        let total=calculate(expression.valueBefore,expression.operator,expression.valueAfter)
        screen.value=total;                 
        expression.valueAfter=0;
        expression.valueBefore=total

    }


    buttonValue=e.target.value
    screen.value=expression.valueBefore+buttonValue
    expression.operator=buttonValue


}

function resultFunction(){
    let total=calculate(expression.valueBefore,expression.operator,expression.valueAfter)
    screen.value=total;
    expression.valueBefore=total;
    expression.valueAfter=0;
}



function calculate(initial,operator,after){
    if(operator==="+"){
    return initial+after
    }
    if(operator==="-"){
        return initial-after
        }
    if(operator==="*"){
    return initial*after
    }
    if(operator==="/"){
        return initial/after
        }
    if(operator==="%"){
    return initial%after
    }
        
    }


