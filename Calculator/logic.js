
function getHistory(){
    return document.getElementById("history").innerText;
}
function printHistory(num){
    document.getElementById("history").innerText=num;
    
}

function getOutput(){

    return document.getElementById("output").innerText;
}


function printOutput(num){
    document.getElementById("output").innerText=num;
    
}

    var num=document.getElementsByClassName("number");
    for(let i=0;i<num.length;i++)
    {
        num[i].addEventListener('click',function(){
            var h=getHistory();
                if(this.id==".")
                {
                    
                    h=h+this.id
                }
                else{
                    h=h+this.id;
                }
                printHistory(h);

        })
    }
    
    var op=document.getElementsByClassName("operator");
    for(let i=0;i<op.length;i++)
    {
        op[i].addEventListener('click',function(){
        if(this.id=="clear")
        {
            printOutput(" ");
           printHistory(" ");
        }

        else if(this.id=="backspace")
        {
           var a=getHistory();
            a=a.substr(0,a.length-1);
            printHistory(a);
            printOutput(" ");
        }

        else if(this.id=="eq")
        {
                if(getHistory()!=" "){
                    var his=getHistory();
                    var result=eval(his);
                  printOutput( result);
                }
        }

        else{

            var h=getHistory();
            h=h+this.id;
            printHistory(h);
        }

        
    })
    }


