"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function BookingPage(){

const [service,setService]=useState("");


return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Book Maintenance
</h1>



<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>


<h2 className="text-2xl font-bold">
Select Service
</h2>



<select

value={service}

onChange={(e)=>setService(e.target.value)}

className="
mt-5
w-full
rounded-xl
border
p-4
"

>


<option value="">
Choose Service
</option>


<option>
Battery Inspection
</option>


<option>
Software Update
</option>


<option>
Full Vehicle Check
</option>


</select>





<Link

href={
service
?
"/maintenance/success"
:
"#"
}

className="
mt-6
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
