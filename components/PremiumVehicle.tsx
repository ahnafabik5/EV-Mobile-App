"use client";


import {
BatteryCharging,
Gauge,
ShieldCheck,
Zap
} from "lucide-react";



export default function PremiumVehicle(){


return(

<section
className="
relative
overflow-hidden
rounded-[45px]
bg-gradient-to-br
from-emerald-500
via-green-700
to-black
p-6
text-white
shadow-2xl
"
>


{/* Moving light */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/20
to-transparent
animate-shine
"
/>





<div
className="
relative
z-10
"
>


<div className="
flex
items-center
justify-between
"
>


<div>

<p className="text-green-100">
Vehicle Profile
</p>


<h1 className="
text-4xl
font-black
"
>

BYD ATTO 3

</h1>


<p>
Premium Electric SUV
</p>


</div>



<div
className="
rounded-full
bg-white/20
px-4
py-2
backdrop-blur
"
>

Active ⚡

</div>


</div>






<img

src="/car.jpg"

alt="BYD ATTO 3"

className="
mt-8
h-64
w-full
rounded-[35px]
object-cover
animate-float
"

 />







<div

className="
mt-6
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

icon={<Gauge/>}

value="380"

label="Range"

/>



<Stat

icon={<ShieldCheck/>}

value="98%"

label="Health"

/>


</div>




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
text-green-300
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


<p className="text-sm">
{label}
</p>


</div>


)

}
