"use client";

import React, { createContext, useState,useContext } from "react";
type SideContext ={
  
  backButtonvisible: boolean;
  setBackButtonvisible: React.Dispatch<React.SetStateAction<boolean>>;
  profMenue: boolean;
  setProfMenue: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
setSide: React.Dispatch<React.SetStateAction<boolean>>;
userName: any;
setUserName: React.Dispatch<React.SetStateAction<any>>;
userId: any;
setUserId: React.Dispatch<React.SetStateAction<any>>;
Signed: boolean;
setSigned: React.Dispatch<React.SetStateAction<boolean>>;
AuthFunction: any;
setAuthFunction: React.Dispatch<React.SetStateAction<any>>;
}

export const SideContext= createContext<SideContext| null>(null);

export default function SideContextProvider({children}: {
    children: React.ReactNode;
  }){
    const [side, setSide]=useState(false);
    const [Signed, setSigned]=useState(false);
    const [AuthFunction, setAuthFunction]=useState(false);
    const [profMenue, setProfMenue]=useState(false);
    const [userName, setUserName]=useState("");
    const [userId, setUserId]=useState("");
    const [backButtonvisible, setBackButtonvisible]=useState(false);
    return(
        <SideContext.Provider
        value={{
            AuthFunction,
            setAuthFunction,
            backButtonvisible,
            setBackButtonvisible,
            side,
            setSide,
            userName,
            setUserName,
            userId,
            setUserId,
            Signed,
            setSigned,
            profMenue,
            setProfMenue
        }}>
{children}
           </SideContext.Provider>  
    ) 

}

export function useSideContext(){
    const context=useContext(SideContext);
if(!context){
  throw new Error("The Side context should be used inside the provider");
}

return context;
}