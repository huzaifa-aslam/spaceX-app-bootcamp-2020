import React,{createContext} from "react";
export function getName(e:React.FormEvent<EventTarget>,selectedAnswer:any){
    e.preventDefault()
    console.log('selectedAnswer',selectedAnswer)

}
export const getNameContext=createContext(0)

