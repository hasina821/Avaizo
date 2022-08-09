import React from "react";
import ArrowUp from "../icons/ArrowUp";
import Coin from "../icons/Coin";
import Order from "../icons/Order"
import Customer from "../icons/Customer"

const stats = [
    {
      title: "Total Revenue",
      percentage: "+32.40%",
      value: "$10,243.00",
      status: "up",
      icon: <Coin/>,
    },
    {
      title: "Total Dish Ordered",
      percentage: "-12.40%",
      value: "23,456",
      status: "down",
      icon: <Order/>,
    },
    {
      title: "Total Customer",
      percentage: "+2.40%",
      value: "1,234",
      status: "up",
      icon: <Customer/>,
    },
  ];

const StatsCard = () =>{
    return(
        <>
            <div className="flex gap-6">
                {stats.map((stat)=>(
                    <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
                        <div className="flex items-center gap-x-3">
                            <div className="p-2 bg-gray-800 rounded-lg">
                                {stat.icon}
                            </div>
                            <span
                            className="text-xs font-medium text-accent-green"
                            >
                            { stat.percentage }
                            </span>
                            <div
                            className="p-0.5 rounded-full bg-accent-green/20"
                            >
                            <ArrowUp/>
                            </div>
                        </div>
                        <div className="text-3xl font-semibold text-white">{ stat.value }</div>
                        <div className="text-sm tracking-wide text-gray-500">{ stat.title }</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StatsCard;