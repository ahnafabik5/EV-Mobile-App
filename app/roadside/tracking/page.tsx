"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MapCard from "@/components/MapCard";
import {
  MapPin,
  Phone,
  CheckCircle,
  Clock,
} from "lucide-react";


export default function TrackingPage(){


const [completed,setCompleted]=useState(false);



return(

<DashboardLayout>



<div className="space-y-6">

<MapCard

current="Your Location, Gulshan Dhaka"

destination="Rahim Khan (EV Technician)"

 />




<h1 className="text-4xl font-black">
Technician Tracking
</h1>


<p className="text-gray-500">
Your roadside assistance is on the way.
</p>






<section
className="
rounded-[32px]
bg-gradient-to-br
from-green-500
to-emerald-700
p-6
text-white
shadow-xl
"
>


<div className="flex items-center gap-4">


<div
className="
h-16
w-16
rounded-full
bg-white/20
flex
items-center
justify-center
text-2xl
font-black
"
>

RK

</div>



<div>

<p className="text-green-100">
Assigned Technician
</p>


<h2 className="text-2xl font-black">
Rahim Khan
</h2>


<p>
EV Specialist
</p>


</div>


</div>



</section>







<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>


<div className="flex items-center gap-3">


<Clock className="text-green-600"/>


<h2 className="text-2xl font-bold">
Estimated Arrival
</h2>


</div>


<p className="
mt-4
text-5xl
font-black
text-green-600
"
>
18 min
</p>



</div>








<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>


<div className="flex items-center gap-3">


<MapPin
className="text-blue-600"
/>


<h2 className="text-2xl font-bold">
Live Location
</h2>


</div>



<div
className="
mt-5
h-48
rounded-2xl
bg-blue-50
flex
items-center
justify-center
text-blue-600
font-bold
"
>

Technician is moving towards you 📍

</div>



</div>







<div className="grid gap-4 sm:grid-cols-2">


<button
className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-gray-900
p-4
font-bold
text-white
"
>

<Phone size={20}/>

Call Technician

</button>





{
!completed ? (

<button

onClick={()=>setCompleted(true)}

className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-green-600
p-4
font-bold
text-white
"
>

<CheckCircle size={20}/>

Complete Request

</button>


)

:

(

<Link

href="/dashboard"

className="
flex
items-center
justify-center
rounded-xl
bg-green-600
p-4
font-bold
text-white
"
>

Request Completed ✓

</Link>

)

}



</div>




</div>


</DashboardLayout>


)

}
