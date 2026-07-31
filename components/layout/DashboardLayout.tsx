"use client";

import {useState} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import {
Home,
Zap,
BatteryCharging,
Wrench,
History,
ShieldCheck,
Info,
Settings,
User,
X
} from "lucide-react";


type Props={
children:React.ReactNode;
};


export default function DashboardLayout({
children
}:Props){


const [menuOpen,setMenuOpen]=useState(false);



const menu=[

{
name:"Home",
href:"/",
icon:Home
},



{
name:"Charging",
href:"/stations",
icon:Zap
},

{
name:"Battery",
href:"/battery",
icon:BatteryCharging
},

{
name:"Service",
href:"/service",
icon:Wrench
},

{
name:"History",
href:"/history",
icon:History
},

{
name:"Warranty",
href:"/warranty",
icon:ShieldCheck
},

{
name:"About Us",
href:"/about",
icon:Info
},

{
name:"Settings",
href:"/settings",
icon:Settings
},

];



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

onMenuClick={()=>setMenuOpen(true)}

/>





{/* Desktop */}

<aside
className="
hidden
lg:block
fixed
left-0
top-20
h-full
"
>

<Sidebar/>

</aside>







{/* Premium Mobile Drawer */}

{

menuOpen && (

<>


<div

className="
fixed
inset-0
z-40
bg-black/50
backdrop-blur-sm
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
w-80
bg-white
shadow-2xl
p-5
lg:hidden
"

>


<div
className="
flex
items-center
justify-between
"
>


<div>

<h2 className="
text-2xl
font-black
text-green-600
">

EV Care

</h2>


<p className="text-sm text-gray-500">
BYD ATTO 3 Owner
</p>


</div>



<button
onClick={()=>setMenuOpen(false)}
className="
rounded-full
bg-gray-100
p-3
"
>

<X/>

</button>


</div>







<div
className="
mt-6
rounded-3xl
bg-gradient-to-br
from-green-500
to-emerald-700
p-5
text-white
"
>

<div
className="
flex
items-center
gap-4
"
>

<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-white/20
"
>

<User/>

</div>


<div>

<h3 className="font-black">
Arif Hasan
</h3>


<p className="text-sm">
Premium Member
</p>


</div>


</div>


</div>







<nav className="
mt-6
space-y-2
"
>


{

menu.map((item)=>{


const Icon=item.icon;


return(

<Link

key={item.name}

href={item.href}

onClick={()=>setMenuOpen(false)}

className="
flex
items-center
gap-4
rounded-2xl
p-4
font-bold
text-gray-700
hover:bg-green-50
hover:text-green-600
transition
"

>

<Icon size={22}/>

{item.name}


</Link>


)

})

}



</nav>





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




<BottomNav/>


</div>

)

}
