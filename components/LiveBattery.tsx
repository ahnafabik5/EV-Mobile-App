"use client";


import {
BatteryCharging,
Thermometer,
Zap
} from "lucide-react";



export default function LiveBattery(){


return(

<div

className="
rounded-[35px]
p-6
bg-gradient-to-br
from-green-500/20
to-cyan-500/20
backdrop-blur-xl
border
border-white/10
shadow-2xl
"

>


<div className="
flex
items-center
gap-3
"
>

<BatteryCharging
className="
text-green-400
"
size={32}
/>


<h2 className="
text-2xl
font-black
"
>

Battery Status

</h2>


</div>






<div className="
mt-6
flex
items-center
gap-5
"
>


<div
className="
relative
h-32
w-16
rounded-xl
border-4
border-white/30
p-1
overflow-hidden
"
>


<div

className="
absolute
bottom-0
left-0
w-full
rounded-lg
bg-gradient-to-t
from-green-500
to-cyan-400
animate-pulse
"

style={{
height:"85%"
}}

/>


</div>






<div>

<h1 className="
text-5xl
font-black
"
>

85%

</h1>


<p className="text-gray-400">
Battery Level
</p>


</div>


</div>







<div className="
mt-6
grid
grid-cols-2
gap-4
"
>


<Info

icon={<Zap/>}

title="Range"

value="380 KM"

/>


<Info

icon={<Thermometer/>}

title="Temperature"

value="29°C"

/>


</div>






<div

className="
mt-5
rounded-2xl
bg-green-400/10
p-4
text-center
"

>


<p className="text-sm text-gray-400">
AI Battery Prediction
</p>


<h3 className="
mt-1
text-xl
font-black
text-green-400
"
>

Excellent Condition

</h3>


</div>






</div>


)

}





function Info({
icon,
title,
value
}:any){


return(

<div
className="
rounded-2xl
bg-white/10
p-4
"
>

<div className="text-green-400">
{icon}
</div>


<p className="mt-2 text-sm text-gray-400">
{title}
</p>


<h3 className="text-xl font-black">
{value}
</h3>


</div>


)

}
