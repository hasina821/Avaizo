import React, { Fragment } from "react";
import Option from "../icons/Options";
import Color from "../palette/color";

const orders = [
    {
      avatar: "https://avatars.githubusercontent.com/u/80751503?s=400&u=6a0d04a90a1089e5ad180560b65371d56c0a20a8&v=4",
      name: "RAMAMIHARIVELO",
      menu: "Marihasina",
      total: "120",
      status: "0342324391",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/93115585?v=4",
      name: "ROBUSTE",
      menu: "Manohisafidy",
      total: "145",
      status: "0342324391",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/82655694?v=4",
      name: "RAKOTO",
      menu: "Barbie",
      total: "105",
      status: "0342324391",
    },
    
  ];
  

const OrderReport = () =>{
    return(
        <Fragment>
            <div className="p-6 bg-gray-900 rounded-lg">
                <div className="flex justify-between items-center pb-4">
                    <h2 className="text-xl font-semibold leading-loose text-white">Nos clients</h2>
                    <button className="flex py-3 px-4 rounded-lg border border-gray-700 gap-x-2.5">
                        <Option  />
                        <span className="text-sm text-white">Filtrer l'ordre</span>
                    </button>
                </div>
                <table className="w-full">
                <thead style={{backgroundColor:Color.paletteTeal1}}>
                    <tr className="text-sm font-semibold text-white">
                    <td className="py-4 border-b border-gray-700">Nom</td>
                    <td className="py-4 border-b border-gray-700">Prenom</td>
                    <td className="py-4 border-b border-gray-700 text-right">Presence </td>
                    <td className="py-4 border-b border-gray-700 text-center">Tel</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>(
                    <tr v-for="order in orders" className="text-sm text-gray-500">
                    <td className="py-4">
                        <div className="flex gap-4 items-center">
                        <img width="32" className="rounded-full" src={order.avatar} alt="" />
                        <span> { order.name } </span>
                        </div>
                    </td>
                    <td className="py-4">{ order.menu }</td>
                    <td className="py-4 tabular-nums text-right">{ order.total }</td>
                    <td className="py-4 flex justify-center">
                        <span
                        className="flex justify-center py-1 w-24 font-medium capitalize rounded-full"
                        >
                        { order.status }
                        </span>
                    </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default OrderReport;