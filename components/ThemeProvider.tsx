"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({children}:{children:React.ReactNode}){

const [darkMode,setDarkMode]=useState(false);

useEffect(()=>{
const saved=localStorage.getItem("darkMode");

if(saved==="true"){
setDarkMode(true);
document.documentElement.classList.add("dark");
}

},[]);


function toggleDarkMode(){

setDarkMode((prev)=>{

const next=!prev;

localStorage.setItem("darkMode",String(next));

if(next){
document.documentElement.classList.add("dark");
}
else{
document.documentElement.classList.remove("dark");
}

return next;

});

}


return(
<ThemeContext.Provider value={{darkMode,toggleDarkMode}}>
{children}
</ThemeContext.Provider>
)

}


export function useTheme(){
return useContext(ThemeContext);
}
