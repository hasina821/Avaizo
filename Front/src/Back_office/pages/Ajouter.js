import React from "react"
import CardAdd from "../components/cards/CardAdd";



const Add = ()=>{
    return(
        <main class="flex flex-col flex-1 gap-6 p-4">
            <header>
                <img src='/crew.png' width='100px' height='50px' alt="logo"/>
            </header>
            <hr class="border-gray-700" />
            <CardAdd />
        </main>
    )
}

export default Add;