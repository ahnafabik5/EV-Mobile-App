"use client";

import {
MapPin,
Zap,
Navigation,
} from "lucide-react";


const stations=[

{
name:"Gulshan Super Hub",
distance:"2.1 KM",
slots:"6 Slots"
},

{
name:"Bashundhara EV Point",
distance:"4.8 KM",
slots:"4 Slots"
},

{
name:"Uttara Fast Charger",
distance:"7.3 KM",
slots:"8 Slots"
}

];



export default function ChargingMap(){


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
top-32
h-2
w-[120%]
rotate-6
bg-white
"
/>


<div
className="
absolute
left-[-20px]
top-52
h-2
w-[120%]
-rotate-12
bg-white
"
/>




{/* Route */}

<div
className="
absolute
left-20
top-40
h-1
w-64
rotate-6
bg-green-500
"
/>





{/* Current location */}

<div
className="
absolute
left-10
top-24
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

<Navigation/>

</div>


</div>






{/* Station pins */}

<div
className="
absolute
right-16
top-16
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
bg-green-600
text-white
shadow-xl
ring-8
ring-green-100
"
>

<Zap/>

</div>


</div>





<div
className="
absolute
right-28
bottom-20
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
bg-green-600
text-white
shadow-xl
ring-8
ring-green-100
"
>

<Zap/>

</div>


</div>





<div
className="
absolute
left-40
bottom-12
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
bg-green-600
text-white
shadow-xl
ring-8
ring-green-100
"
>

<Zap/>

</div>


</div>






<div
className="
absolute
right-5
top-5
rounded-full
bg-white
px-4
py-2
font-bold
shadow
"
>

Nearby Chargers

</div>



</div>







<div className="space-y-3 p-5">


{
stations.map((station)=>(


<div
key={station.name}
className="
flex
items-center
justify-between
rounded-2xl
bg-gray-50
p-4
"
>


<div className="flex items-center gap-3">


<MapPin
className="text-green-600"
/>


<div>

<h3 className="font-bold">
{station.name}
</h3>


<p className="text-sm text-gray-500">
{station.distance}
</p>


</div>


</div>





<span
className="
rounded-full
bg-green-100
px-3
py-1
text-sm
font-bold
text-green-700
"
>

{station.slots}

</span>


</div>


))

}


</div>



</div>


)

}
