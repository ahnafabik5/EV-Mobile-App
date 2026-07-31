"use client";

import {
MapPin,
Navigation,
Zap,
Clock,
BatteryCharging
} from "lucide-react";

import Link from "next/link";


const stations=[

{
name:"Gulshan EV Hub",
distance:"2.1 KM",
time:"5 min",
power:"150 KW",
href:"/stations/gulshan"
},

{
name:"Banani Charging Point",
distance:"4.5 KM",
time:"12 min",
power:"90 KW",
href:"/stations/banani"
},

{
name:"Dhanmondi EV Station",
distance:"6 KM",
time:"18 min",
power:"120 KW",
href:"/stations/dhanmondi"
}

];



export default function EVMap(){


return(

<section
className="
rounded-[40px]
p-6
space-y-6
"
>


<div
className="
relative
h-72
overflow-hidden
rounded-[35px]
bg-gradient-to-br
from-slate-900
via-emerald-950
to-black
"
>


{/* fake map grid */}

<div
className="
absolute
inset-0
opacity-20
bg-[linear-gradient(90deg,#00ff99_1px,transparent_1px),linear-gradient(#00ff99_1px,transparent_1px)]
bg-[size:40px_40px]
"
/>





<div
className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
"
>


<div
className="
h-20
w-20
rounded-full
bg-green-400/20
animate-ping
"
/>


<MapPin
size={45}
className="
text-green-400
"
/>


</div>




<div
className="
absolute
bottom-5
left-5
rounded-2xl
bg-black/60
p-4
backdrop-blur
"
>


<p className="text-sm">
Current Location
</p>


<h3 className="font-black">
Dhaka, Bangladesh
</h3>


</div>


</div>






<div>

<h2 className="
text-2xl
font-black
"
>

Nearby Charging Stations

</h2>


</div>





<div className="space-y-4">


{
stations.map((station)=>(


<Link

key={station.name}

href={station.href}

className="
block
rounded-3xl
bg-white/10
p-5
hover:bg-green-500/20
"

>


<div className="
flex
justify-between
"
>


<div>


<h3 className="
font-black
text-xl
"
>

{station.name}

</h3>


<p className="text-sm">
{station.distance} away
</p>


</div>



<Zap
className="text-green-400"
/>


</div>





<div className="
mt-4
flex
gap-5
text-sm
"
>


<span>
⚡ {station.power}
</span>


<span>
⏱ {station.time}
</span>


</div>



<p className="
mt-3
text-green-400
font-bold
"
>

Click →

</p>



</Link>


))

}


</div>



</section>


)

}
