"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  MapPin,
  Car,
  AlertTriangle,
} from "lucide-react";


export default function ConfirmPage(){


const [confirmed,setConfirmed]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Confirm Emergency Request
</h1>


<p className="text-gray-500">
Review your roadside assistance details.
</p>





<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>




<div className="space-y-5">


<div className="flex items-center gap-4 rounded-2xl bg-red-50 p-4">

<AlertTriangle
className="text-red-600"
/>


<div>

<p className="text-sm text-gray-500">
Issue
</p>

<h3 className="font-bold">
Battery Dead
</h3>


</div>


</div>






<div className="flex items-center gap-4 rounded-2xl bg-green-50 p-4">

<Car
className="text-green-600"
/>


<div>

<p className="text-sm text-gray-500">
Vehicle
</p>

<h3 className="font-bold">
BYD Seal
</h3>


</div>


</div>






<div className="flex items-center gap-4 rounded-2xl bg-blue-50 p-4">

<MapPin
className="text-blue-600"
/>


<div>

<p className="text-sm text-gray-500">
Current Location
</p>

<h3 className="font-bold">
Gulshan, Dhaka
</h3>


</div>


</div>



</div>






{
!confirmed ? (


<button

onClick={()=>setConfirmed(true)}

className="
mt-6
w-full
rounded-xl
bg-red-600
p-4
font-bold
text-white
"

>

Confirm Emergency Request

</button>


)

:


<Link

href="/roadside/tracking"

className="
mt-6
block
w-full
rounded-xl
bg-green-600
p-4
text-center
font-bold
text-white
"

>

Find Technician

</Link>


}




</div>






</div>


</DashboardLayout>


)

}
