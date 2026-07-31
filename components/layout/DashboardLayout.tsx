"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BottomNav from "@/components/BottomNav";


type Props={
children:React.ReactNode;
};


export default function DashboardLayout({
children
}:Props){


const [menuOpen,setMenuOpen]=useState(false);



return(

<div
className="
min-h-screen
bg-gray-100
pb-24
lg:pb-0
"
>


<Navbar
onMenuClick={()=>setMenuOpen(!menuOpen)}
/>



{/* Desktop Sidebar */}

<aside className="hidden lg:block fixed left-0 top-20 h-full">

<Sidebar />

</aside>





{/* Mobile Sidebar */}

{
menuOpen && (

<>

<div
className="
fixed
inset-0
z-40
bg-black/40
lg:hidden
"
onClick={()=>setMenuOpen(false)}
/>



<aside
className="
fixed
left-0
top-0
z-50
h-full
w-72
bg-white
shadow-xl
lg:hidden
"
>

<Sidebar />

</aside>

</>

)

}





<main
className="
min-w-0
p-4
sm:p-6
lg:ml-64
lg:p-8
"
>

{children}

</main>




<BottomNav />


</div>


)

}
