"use client";

import {useState} from "react";
import Link from "next/link";
import {
Bot,
X,
BatteryCharging,
Zap,
Wrench,
Car
} from "lucide-react";


const options=[

{
title:"Check Battery Health",
desc:"View your BYD ATTO 3 battery status",
icon:BatteryCharging,
href:"/battery"
},

{
title:"Find Charging",
desc:"Locate nearest charging station",
icon:Zap,
href:"/stations"
},

{
title:"Book Service",
desc:"Schedule vehicle maintenance",
icon:Wrench,
href:"/service"
},

{
title:"Driving Tips",
desc:"Improve EV efficiency",
icon:Car,
href:"/analytics"
}

];



export default function EVAIAssistant(){


const [open,setOpen]=useState(false);



return(

<>


<button

onClick={()=>setOpen(true)}

className="
fixed
bottom-28
right-6
z-50
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-gradient-to-br
from-green-400
to-cyan-400
text-black
shadow-2xl
animate-glow
"

>

<Bot size={32}/>

</button>





{

open && (

<div

className="
fixed
bottom-24
right-5
z-50
w-80
rounded-[35px]
bg-black/80
p-5
backdrop-blur-xl
border
"

>


<div className="
flex
items-center
justify-between
"
>


<h2 className="
text-xl
font-black
"
>

EV AI Assistant

</h2>


<button

onClick={()=>setOpen(false)}

>

<X/>

</button>


</div>





<p className="
mt-3
text-sm
text-gray-400
"
>

How can I help your BYD ATTO 3 today?

</p>





<div className="
mt-5
space-y-3
"
>


{

options.map((item)=>{


const Icon=item.icon;


return(

<Link

key={item.title}

href={item.href}

onClick={()=>setOpen(false)}

className="
flex
gap-3
rounded-2xl
bg-white/10
p-4
hover:bg-green-500/20
"

>


<div className="
text-green-400
"
>

<Icon/>

</div>


<div>

<h3 className="font-bold">
{item.title}
</h3>


<p className="text-xs text-gray-400">
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


</>

)

}
