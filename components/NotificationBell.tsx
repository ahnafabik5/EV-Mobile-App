"use client";

import {useState} from "react";
import Link from "next/link";
import {
Bell,
BatteryCharging,
Zap,
Wrench,
} from "lucide-react";


const notifications=[

{
title:"Battery Health Check",
desc:"Battery health is excellent",
icon:BatteryCharging,
href:"/battery",
},

{
title:"Charging Reminder",
desc:"Your vehicle needs charging",
icon:Zap,
href:"/stations",
},


{
title:"Service Due Soon",
desc:"Maintenance in 21 days",
icon:Wrench,
href:"/maintenance",
},


];



export default function NotificationBell(){


const [open,setOpen]=useState(false);



return(

<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="
relative
rounded-full
p-3
hover:bg-gray-100
"

>

<Bell
className="text-green-600"
/>


<span
className="
absolute
right-2
top-2
h-3
w-3
rounded-full
bg-red-500
"
/>


</button>





{
open && (

<div
className="
absolute
right-0
z-50
mt-3
w-80
rounded-3xl
border
bg-white
p-4
shadow-xl
"
>


<h2 className="
mb-4
text-xl
font-black
">

Notifications

</h2>





<div className="space-y-3">


{
notifications.map((item)=>{


const Icon=item.icon;


return(

<Link

key={item.title}

href={item.href}

className="
flex
gap-4
rounded-2xl
bg-gray-50
p-4
hover:bg-green-50
"

>


<div
className="
rounded-xl
bg-green-100
p-3
text-green-600
"
>

<Icon/>

</div>




<div>

<h3 className="font-bold">
{item.title}
</h3>


<p className="text-sm text-gray-500">
{item.desc}
</p>


</div>



</Link>

)


})

}


</div>



</div>


)

}



</div>

)

}
