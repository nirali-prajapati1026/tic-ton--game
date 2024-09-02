import"./game.css"
export const Squr=(props)=>{
    //console.log(props.value); 
    return(
        <>
         <div className="box" onClick={props.onclick}>
            <p>{props.value}</p>
         </div>
        </>
    )
}