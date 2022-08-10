import React,{Fragment} from "react"
import { faDollar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Coin= ()=>{
    return(
        <FontAwesomeIcon icon={faDollar} style={{color:'#0E7D6D',height:'30px'}}/>
    )
}

export default Coin;