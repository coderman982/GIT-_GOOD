const prompt=require("prompt-sync")({sigint:true}); 


function compchoice(){
    let comp=Math.floor(Math.random()*3);
   
    if (comp===0) {
        return "scissor";

        
    }

    else if(comp===1){
        return "rock";
    }

    else {
        return "paper";
    }


}

function humanchoice(){
    let choice=prompt("enter your weapon")
    return choice;
}
let humscore=0;
let comscore=0;

let playgame=()=>{
   
    function play(humanchoice,compchoice){

        if (humanchoice===compchoice) {
            console.log(`jh${humanchoice}`);
            
        }

        else if ((humanchoice==="rock"&&compchoice==="scissor")||
                 ( humanchoice==="paper"&&compchoice==="rock")||(
                    humanchoice==="scissor"&&compchoice==="paper")) {
                        console.log(`human chose${humanchoice}`);
                        return humscore++;
                      }

                      else{
                        console.log(`comp chose${compchoice}`);
                        return comscore++;
                        
                      }
                    }


                      for (let i = 1; i < 5; i++) {
                        let computer=compchoice();
                        let human=humanchoice();

                        play(human,computer);

                        
                      }


                      if (humscore===comscore) {
                        console.log("tue");
                        
                      }

                      else if (humscore>comscore) {
                        console.log("you win")
                        
                      }

                      else{
                        console.log("comp win")
                      }
  
}

playgame();