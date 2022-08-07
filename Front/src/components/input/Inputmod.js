import React,{Fragment} from "react"


const Input = (props) =>{
     return(
          <Fragment>
               <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="email" placeholder="votre email" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={props.placeholder}/>
                    <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                    {props.icon}
                    </span>
               </div>
          </Fragment>
     )
}
export default Input;