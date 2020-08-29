const allnumbuttons =document.querySelectorAll("#numbutton");
const operators =document.querySelectorAll("#operatorbutton");
const previousoperand=document.querySelector("#previousnumber");
const currentoperand=document.querySelector("#currentnumber");
const period=document.querySelector("#dot");
const del=document.querySelector("#del");
const clear=document.querySelector("#C");
const equal=document.querySelector("#equal");
const sign=document.querySelector("#sign");
const calculation=document.querySelector("#calculation");
const answer=document.querySelector("#answer");
let times=0;

class Calculaor
{
    constructor(previouselement,currentelement)
    {
        this.previouselement=previouselement;
        this.currentelement=currentelement;
        this.clear();
    }

    clear()
    {
        this.currentoperand="";
        this.previousoperand="";
        this.operator=undefined;
    }

    sign(number)
    {
        const current=parseFloat(this.currentoperand);
        let value=0-current;
        this.currentoperand=value;
    }

    delete()
    {
        this.currentoperand= this.currentoperand.toString().slice(0,-1);
    }

    appendnumber(number)
    {
        if(number=='.' && this.currentoperand.includes('.'))
        {
            return;
        }
        this.currentoperand= this.currentoperand.toString()+number.toString();
    }

    chooseperation(operator)
    {
        if(this.currentoperand=="")
        {
            return;
        }
        if(this.previousoperand !="")
        {
            this.compute();
        }
        this.previousoperand=this.currentoperand;
        this.operator=operator;
        this.currentoperand="";
    }

    compute()
    {
        if(this.currentoperand=="" || this.previousoperand=="")
        {
            return;
        }
        let computation;
        const current=parseFloat(this.currentoperand);
        const prev=parseFloat(this.previousoperand);
        if (isNaN(prev) || isNaN(current))
        {
            return;
        }
        switch(this.operator)
        {
            case "+": computation=prev+current;
                break;
            case "-": computation=prev-current;
                break;
            case "x": computation=prev*current;
                break;
            case "/": computation=prev/current;
                break;
            case "%":computation=prev%current;
                break;
        }
        calculation.value=this.previousoperand+" "+this.operator+" "+this.currentoperand;
        let returnvalue=computation.toFixed(3);
        let returnvalue2=returnvalue.toString();
        answer.value=returnvalue2;
    }

    updatedisplay()
    {
        this.currentelement.innerText=this.currentoperand;
        if(this.operator != null)
        {
            this.previouselement.innerText=this.previousoperand+"         "+this.operator;
        }
        else
        {
            this.previouselement.innerText=this.previousoperand;
        }
    }
}

const calculator=new Calculaor(previousoperand,currentoperand);

allnumbuttons.forEach(div =>{
    div.addEventListener("click",()=>{
        calculator.appendnumber(div.innerHTML);
        calculator.updatedisplay();
    })
}
)

operators.forEach(operator =>{
    operator.addEventListener("click",()=>{
        calculator.chooseperation(operator.innerHTML);
        calculator.updatedisplay();
    })
})

period.addEventListener('click',()=>{
    calculator.appendnumber(period.innerHTML);
    calculator.updatedisplay();
})

clear.addEventListener('click',()=>{
    calculator.clear();
    calculator.updatedisplay();
})

del.addEventListener('click',()=>{
    calculator.delete();
    calculator.updatedisplay();
})

sign.addEventListener('click',()=>{
    calculator.sign(times);
    calculator.updatedisplay();
    times++;
})

function output()
{
    calculator.compute();
    calculator.updatedisplay();
}




