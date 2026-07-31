"use client";

import {useState} from "react";
import Link from "next/link";
import {
Bell,
BatteryCharging,
Zap,
Wrench
} from "lucide-react";


const notifications=[

{
id:"battery",
title:"Battery Health Alert",
desc:"Battery performance update available",
icon:BatteryCharging
},

{
id:"charging",
title:"Charging Reminder",
desc:"Your BYD ATTO 3 needs charging soon",
icon:Zap
},

{
id:"service",
title:"Service Due",
desc:"Vehicle maintenance is scheduled",
icon:Wrench
}

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

<Bell className="text-green-600"/>


<span
className="
absolute
-right-1
-top-1
flex
h-6
w-6
items-center
justify-center
rounded-full
bg-red-500
text-xs
font-black
text-white
"
>

{notifications.length}

</span>


</button>





{
open && (

<div
className="
absolute
right-0
top-14
z-50
w-80
rounded-3xl
bg-white
p-5
shadow-2xl
border
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
notifications.map((n,index)=>{


const Icon=n.icon;


return(

<Link

key={n.id}

href={`/notifications/${n.id}`}

onClick={()=>setOpen(false)}

className="
flex
gap-4
rounded-2xl
bg-gray-50
p-4
hover:bg-green-50
transition
"

>


<div
className="
relative
rounded-xl
bg-green-100
p-3
text-green-600
"
>

<Icon/>


<span
className="
absolute
-right-2
-top-2
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-red-500
text-xs
text-white
"
>

{index+1}

</span>


</div>




<div>

<h3 className="font-bold">
{n.title}
</h3>


<p className="text-sm text-gray-500">
{n.desc}
</p>


<p className="mt-2 text-green-600 font-bold">
Click →
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
