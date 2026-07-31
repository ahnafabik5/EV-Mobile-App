"use client";

import {
  MapPin,
  Navigation,
  Route,
} from "lucide-react";


type Props={
current:string;
destination:string;
};


export default function MapCard({
current,
destination
}:Props){


return(

<div
className="
overflow-hidden
rounded-[32px]
border
bg-white
shadow-xl
"
>



{/* Map Area */}

<div
className="
relative
h-72
overflow-hidden
bg-slate-100
"
>


{/* Roads */}

<div
className="
absolute
left-[-20px]
top-24
h-2
w-[120%]
rotate-12
bg-white
"
/>


<div
className="
absolute
left-[-20px]
top-40
h-2
w-[120%]
-rotate-6
bg-white
"
/>


<div
className="
absolute
left-20
top-[-30px]
h-[140%]
w-2
rotate-12
bg-white
"
/>





{/* Route */}

<div
className="
absolute
left-20
top-28
h-1
w-56
rotate-12
bg-green-500
"
/>






{/* Current Location */}

<div
className="
absolute
left-14
top-20
"
>

<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-blue-600
text-white
shadow-xl
ring-8
ring-blue-200
"
>

<MapPin size={24}/>

</div>


</div>





{/* Destination */}

<div
className="
absolute
right-14
bottom-16
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-red-600
text-white
shadow-xl
ring-8
ring-red-200
"
>

<MapPin size={24}/>

</div>



</div>






{/* Distance */}

<div
className="
absolute
right-5
top-5
rounded-full
bg-white
px-4
py-2
text-sm
font-bold
shadow
"
>

2.4 KM

</div>





<div
className="
absolute
bottom-5
left-1/2
-translate-x-1/2
rounded-full
bg-white/90
px-5
py-2
font-bold
text-gray-700
shadow
"
>

Live Route

</div>



</div>







{/* Details */}


<div className="space-y-5 p-5">


<div className="flex gap-4">


<div
className="
rounded-2xl
bg-blue-100
p-3
text-blue-600
"
>

<Navigation/>

</div>



<div>

<p className="text-sm text-gray-500">
Current Location
</p>


<h3 className="font-bold">
{current}
</h3>


</div>


</div>







<div className="flex gap-4">


<div
className="
rounded-2xl
bg-red-100
p-3
text-red-600
"
>

<Route/>

</div>



<div>

<p className="text-sm text-gray-500">
Destination
</p>


<h3 className="font-bold">
{destination}
</h3>


</div>


</div>




</div>



</div>


)

}
