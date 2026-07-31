"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function ServicePage(){

const [vehicle,setVehicle]=useState("");
const [service,setService]=useState("");
const [date,setDate]=useState("");



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black text-gray-900">
Book Service Appointment
</h1>


<p className="text-gray-500">
Schedule your EV maintenance easily.
</p>





<div className="
rounded-3xl
bg-white
border
border-gray-200
p-6
shadow-lg
space-y-5
">


<select

value={vehicle}

onChange={(e)=>setVehicle(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

>

<option value="">
Select Vehicle
</option>

<option>
BYD Seal
</option>

<option>
Tesla Model 3
</option>

<option>
Hyundai Ioniq 5
</option>


</select>





<select

value={service}

onChange={(e)=>setService(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

>


<option value="">
Select Service
</option>

<option>
Battery Inspection
</option>

<option>
Motor Diagnostics
</option>

<option>
Brake Service
</option>

<option>
Software Update
</option>


</select>





<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>






<Link

href={
vehicle && service && date
?
"/service/success"
:
"#"
}

className="
block
rounded-xl
bg-green-600
p-4
text-center
font-bold
text-white
"

>

Confirm Booking

</Link>



</div>





</div>


</DashboardLayout>


)

}
