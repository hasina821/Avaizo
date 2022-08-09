import React from "react"
import CardSettings from "../components/cards/Cardsettings"

const Settings = ()=>{
    return(
        <>
            <main class="flex flex-col flex-1 gap-6 p-4">
                <header>
                    <img src='/crew.png' width='100px' height='50px' alt="logo"/>
                </header>  
                <hr class="border-gray-700" />
                <CardSettings/>
            </main>
        </>
    )
}

export default Settings;