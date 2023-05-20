import { useState,useEffect } from "react";

export function useLocalStorage<T>(key:string,initialValuse: T | (()=> T)){
    const [value,setValue] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(key)

        if(jsonValue != null){
            return JSON.parse(jsonValue)
        }

        if(typeof initialValuse === "function"){
            return initialValuse as () => T
        }else{
            return initialValuse
        }
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue] as [typeof value , typeof setValue]
}