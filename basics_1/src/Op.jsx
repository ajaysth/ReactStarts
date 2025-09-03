import { useContext } from "react";
import { logincontext } from "./App";




function Piu(){
    const name = useContext(logincontext);
    return(
        <>
            <h1>Paani pani piu nw</h1>
            <h2>{name}</h2>
        </>
    )
}
export default Piu;