import React from "react"
import CardAdd from "../components/cards/CardAdd";
import {Link} from "react-router-dom"



const Add = ()=>{
    return(
        <main class="flex flex-col flex-1 gap-6 p-4">
            <header>
                <Link to={`/`}>
                    <img src='/crew.png' width='100px' height='50px' alt="logo"/>
                </Link>
            </header>
            <hr class="border-gray-700" />
            <CardAdd />
        </main>
    )
}

export default Add;