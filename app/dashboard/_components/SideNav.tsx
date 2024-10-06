"use client";
import { FileClock, Home, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: Wallet,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    }
  ];

  const path = usePathname()
  useEffect(() => {
    
  }, [])
  
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
      </div>
        <hr className="my-6 border" />
      <div className="mt-3">
        {menuList.map((menu,index)=>(
            <div className={`flex gap-2 p-3 mb-2 hover:bg-primary items-center hover:text-white rounded-lg cursor-pointer ${path == menu.path && 'bg-primary text-white'}`}>
                <menu.icon className="h-6 w-6"/>
                <h2 className="text-lg">{menu.name}</h2>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
