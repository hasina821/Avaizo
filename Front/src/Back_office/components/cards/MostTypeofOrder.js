import React from "react" 
import ChevronDown from "../icons/ChevronDown";
import Mostorderedof from "../chart/Mostorderedof";

const MostTypeof = () =>{
    return(
        <div>
             <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold leading-loose text-white">Le type le plus commandé </h2>
                    <form>
                        <select className="flex gap-x-2.5 py-3 px-4 rounded-lg border text-white bg-gray-900 border-gray-700">
                            <option className="text-sm text-white">Ajourd'hui</option>
                            <option className="text-sm text-white">Hier</option>
                            <option className="text-sm text-white">La semaine derniere</option>
                        </select>
                    </form>
                </div>
                <hr class="border-gray-700" />
                <div class="flex gap-x-7">
                    <Mostorderedof/>
                    <div class="flex flex-col gap-y-4">
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
                        <div>
                            <div class="text-sm font-medium text-white">Action</div>
                            <div class="text-xs text-gray-500">200 Personnes</div>
                        </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
                        <div>
                            <div class="text-sm font-medium text-white">Erotique</div>
                            <div class="text-xs text-gray-500">122 Personnes</div>
                        </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
                        <div>
                            <div class="text-sm font-medium text-white">Fantastique</div>
                            <div class="text-xs text-gray-500">264 Personnes</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostTypeof;