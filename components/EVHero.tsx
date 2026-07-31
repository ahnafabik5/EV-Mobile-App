"use client";

import {
BatteryCharging,
Zap,
ShieldCheck
} from "lucide-react";



export default function EVHero(){


return(

<section
className="
relative
overflow-hidden
rounded-[45px]
bg-gradient-to-br
from-green-500
via-emerald-600
to-black
p-6
text-white
shadow-2xl
"
>


{/* Glow */}

<div
className="
absolute
right-10
top-10
h-40
w-40
rounded-full
bg-green-400
opacity-30
blur-3xl
animate-pulse
"
/>





<img

src="/car.jpg"

alt="BYD ATTO 3"

className="
relative
z-10
h-72
w-full
rounded-[35px]
object-cover
animate-float
"

 />





<div className="
relative
z-10
mt-6
"
>


<p className="text-green-100">
Premium Electric SUV
</p>


<h1
className="
text-5xl
font-black
"
>

BYD ATTO 3

</h1>


<p className="mt-2 text-lg">
Smart electric mobility
</p>



<div
className="
mt-5
flex
items-center
gap-3
rounded-full
bg-white/20
px-5
py-3
w-fit
backdrop-blur
"
>

<ShieldCheck/>

Verified Vehicle

</div>


</div>






{/* Stats */}

<div
className="
relative
z-10
mt-8
grid
grid-cols-3
gap-3
"
>


<Stat

icon={<BatteryCharging/>}

value="85%"

label="Battery"

/>


<Stat

icon={<Zap/>}

value="380"

label="KM Range"

/>


<Stat

icon={<ShieldCheck/>}

value="98%"

label="Health"

/>



</div>





</section>


)

}






function Stat({
icon,
value,
label
}:any){


return(

<div
className="
rounded-3xl
bg-white/15
p-4
text-center
backdrop-blur
"
>


<div className="
flex
justify-center
text-green-200
"
>

{icon}

</div>


<h2 className="
mt-2
text-2xl
font-black
"
>

{value}

</h2>


<p className="text-sm text-green-100">
{label}
</p>


</div>


)

}
