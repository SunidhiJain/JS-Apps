
var player=["O","X"];

function changeLabel(lab,a)
{
    document.getElementById(lab).innerHTML=a;
}


var btn=document.getElementsByClassName("plug");
function winner()
{

    var i=0,j=0;
    //diagonal logic
    if(btn[4].value=="O"||btn[4].value=="X"){
        if((btn[2].value==btn[4].value&&btn[4].value==btn[6].value)||(btn[0].value==btn[4].value&&btn[4].value==btn[8].value))
        {
            alert("winner player is :"+btn[4].value);
            return 0;

        }
    }
    //row logic
    while(i<9)
    {
        if(btn[i].value=="O"|| btn[i].value=="X")
        {
            if(btn[0+i].value==btn[1+i].value&& btn[1+i].value==btn[2+i].value) 
            {
                
                alert("winner player is :"+btn[i].value);
                return 0;
               
            }
            
        }

     i=i+3;
    }
    //column logic
    i=0;
    while(i<9&&j<3)
    {
        if(btn[i].value=="O"|| btn[i].value=="X"){
            if(i%3==j)
            {
                if(btn[j+0].value==btn[j+3].value&&btn[j+3].value==btn[j+6].value)
                {
                    alert("winner player is :"+btn[i].value);
                    return 0;
                }
                j++;
        
            }
        }
    i++;
    }
    return 1;
}
for(var i=0;i<btn.length;i++)
{
    var flag=0;
    var r;
    var j=0;
    btn[i].addEventListener('click',function(){

        
        
                var e;
                e=document.getElementById(this.id);

                if(flag==0)
                {
                    changeLabel(this.id,player[flag]);
                    
                    e.setAttribute("value",player[flag]);
                    flag=1;
                    j++;
                    
                }
                else{
                    changeLabel(this.id,player[flag]);
                    e.setAttribute("value",player[flag]);
                    flag=0;
                    j++;
                    
                }
                
                if(j>=5){
                 r= winner();
                }

                if(r==1 && j==9) 
                {
                    alert("Match Draw!!!")
                }
                

         
    })
   
   
}



