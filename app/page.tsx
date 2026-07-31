import Link from "next/link";
import {
  BatteryCharging,
  Navigation,
  Zap,
} from "lucide-react";


export default function Home(){


return(

<div
className="
min-h-screen
bg-gray-100
p-5
pb-28
"
>



{/* Header */}

<div className="mb-6">

<p className="text-sm text-gray-500">
Welcome back
</p>


<h1 className="text-3xl font-black text-gray-900">
EV Care
</h1>


</div>






{/* Car Card */}


<section
className="
overflow-hidden
rounded-[35px]
bg-gradient-to-br
from-green-500
to-green-700
p-5
text-white
shadow-xl
"
>


<img
src="/car.jpg"
alt="EV Car"
className="
h-64
w-full
rounded-[28px]
object-cover
"
/>



<div className="mt-5">


<p className="text-sm text-green-100">
Your Vehicle
</p>


<h2 className="text-4xl font-black">
BYD Seal
</h2>


<p className="mt-1 text-green-50">
Premium Electric Sedan
</p>



</div>


</section>








{/* Status */}


<div
className="
mt-6
grid
grid-cols-2
gap-4
"
>


<div
className="
rounded-3xl
bg-white
p-5
shadow-sm
"
>

<BatteryCharging
className="text-green-600"
/>


<h3 className="mt-3 text-3xl font-black text-green-600">
85%
</h3>


<p className="text-gray-500">
Battery
</p>


</div>





<div
className="
rounded-3xl
bg-white
p-5
shadow-sm
"
>

<Navigation
className="text-green-600"
/>


<h3 className="mt-3 text-3xl font-black text-green-600">
380 KM
</h3>


<p className="text-gray-500">
Range
</p>


</div>



</div>








{/* Quick Action */}


<section
className="
mt-6
rounded-3xl
bg-white
p-5
shadow-sm
"
>


<h2 className="text-xl font-bold">
Quick Actions
</h2>



<div className="mt-4 flex gap-3">


<Link
href="/stations"
className="
flex-1
rounded-2xl
bg-green-600
p-4
text-center
font-bold
text-white
"
>
<Zap className="mx-auto"/>
Charge
</Link>



<Link
href="/dashboard"
className="
flex-1
rounded-2xl
bg-gray-900
p-4
text-center
font-bold
text-white
"
>
Dashboard
</Link>



</div>


</section>




</div>

)

}
