"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
MapPin,
Navigation,
Clock,
Route,
CheckCircle
} from "lucide-react";


export default function DirectionsPage(){


const [started,setStarted]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Navigation
</h1>


<p className="text-gray-500">
Follow route to your charging station.
</p>






<div
className="
rounded-[32px]
bg-white
shadow-xl
border
overflow-hidden
"
>


{/* Map */}

<div
className="
relative
h-80
bg-slate-100
"
>


{/* Roads */}

<div
className="
absolute
left-[-30px]
top-40
h-2
w-[120%]
rotate-6
bg-white
"
/>


<div
className="
absolute
left-20
top-20
h-1
w-64
rotate-12
bg-green-500
"
/>




{/* Current */}

<div
className="
absolute
left-12
top-24
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
bg-blue-600
text-white
ring-8
ring-blue-100
shadow-xl
"
>

<Navigation/>

</div>


</div>





{/* Destination */}

<div
className="
absolute
right-12
bottom-20
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
bg-red-600
text-white
ring-8
ring-red-100
shadow-xl
"
>

<MapPin/>

</div>


</div>






<div
className="
absolute
bottom-5
left-1/2
-translate-x-1/2
rounded-full
bg-white
px-5
py-2
font-bold
shadow
"
>

Live Route

</div>


</div>







<div className="space-y-5 p-6">



<div className="flex items-center gap-4">

<Route className="text-green-600"/>


<div>

<p className="text-sm text-gray-500">
Destination
</p>


<h2 className="font-bold text-xl">
Gulshan Super Hub
</h2>


</div>


</div>







<div className="grid grid-cols-2 gap-4">


<div
className="
rounded-2xl
bg-green-50
p-4
"
>


<Clock
className="text-green-600"
/>


<p className="mt-2 text-sm text-gray-500">
ETA
</p>


<h3 className="text-2xl font-black text-green-700">
12 min
</h3>


</div>






<div
className="
rounded-2xl
bg-green-50
p-4
"
>


<MapPin
className="text-green-600"
/>


<p className="mt-2 text-sm text-gray-500">
Distance
</p>


<h3 className="text-2xl font-black text-green-700">
2.1 KM
</h3>


</div>


</div>







<button

onClick={()=>setStarted(true)}

className="
w-full
rounded-xl
bg-green-600
p-4
font-bold
text-white
"

>


{
started
?
"Navigation Started ✓"
:
"Start Navigation"
}


</button>






{
started && (

<div
className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-green-50
p-4
font-bold
text-green-700
"
>

<CheckCircle/>

You are heading to destination

</div>

)

}



</div>


</div>



</div>


</DashboardLayout>


)

}
