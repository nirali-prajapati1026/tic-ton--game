import { useState } from "react"
import { Squr } from "./squr"
import"./game.css"
export const Game=()=>{
    const [num,setNum]=useState([...Array(9).fill(null)])
   // console.log(num);
   const [cond,setCond]=useState(true)
   const checkwinner=()=>{
    let winner=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i=0;i<winner.length;i++){
      let [a,b,c]=winner[i];
      if(num[a]!=null && num[a]===num[b]&& num[a]===num[c]){
        return num[a]
      }
    
    }
    return false;
   }
   let result=checkwinner();
    const handleClick=(index)=>{
     // console.log("helo",index);
     if(num[index]!=null){
        return;
     }
     let copyArray=[...num];
     copyArray[index]=cond?"X":"O";
     setNum(copyArray);
     //console.log(copyArray);
     setCond(!cond);
    }
    const play=()=>{
        setNum([...Array(9).fill(null)])
    }
    return(
        
        <div className="contener">
            <h1 className="head" >Tic Tac Toc </h1>
            <h1 className="head" >{cond?"X":"O"} : your turn</h1>
            {result ?<div className="win"><h1>{result} : You winner</h1> <button onClick={play}>Play again</button></div>:(
        <>
            <div className="row">
            <Squr onclick={()=>handleClick(0)} value={num[0]}></Squr>
            <Squr onclick={()=>handleClick(1)} value={num[1]}></Squr>
            <Squr onclick={()=>handleClick(2)} value={num[2]}></Squr>
            </div>
            <div className="row">
            <Squr onclick={()=>handleClick(3)} value={num[3]}></Squr>
            <Squr onclick={()=>handleClick(4)} value={num[4]}></Squr>
            <Squr onclick={()=>handleClick(5)} value={num[5]}></Squr>
            </div>
            <div className="row">
             <Squr onclick={()=>handleClick(6)} value={num[6]}></Squr>
             <Squr onclick={()=>handleClick(7)} value={num[7]}></Squr>
             <Squr onclick={()=>handleClick(8)} value={num[8]}></Squr>
            </div>
                </>
            )}
           
        </div>

        
       

    )
}

 
