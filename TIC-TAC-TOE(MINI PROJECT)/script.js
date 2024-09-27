let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let msg_con = document.querySelector(".msg-container");
let new_con = document.querySelector(".new");
let msg = document.querySelector(".winner")
let turn0 = true; //playerX player0
console.log(reset);
console.log(new_con)
const winpatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        console.log("box was clicked");
        if(turn0==true){
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        
        
        box.disabled = true;
        checkwinners();
    });
});

const disablebox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}


const enablebox = () =>{
    for(box of boxes){

        box.disabled = false;
        box.innerText="";
    }
}

const resetgame= ()=>{
    turn0 = true;
    enablebox();
    msg_con.classList.add("hide");
}




const showwinner=(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_con.classList.remove("hide");
    disablebox();
}
const checkwinners = ()=>{
    for(pattern of winpatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
       if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val &&pos2val==pos3val){
            console.log("winner");
            showwinner(pos1val);
        }
       }

    }
}

new_con.addEventListener("click",resetgame);

reset.addEventListener("click",resetgame);
