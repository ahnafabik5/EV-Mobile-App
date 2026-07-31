"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function BookingPage(){


const [slot,setSlot]=useState("");



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Reserve Charging Slot
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
Gulshan Super Hub
</h2>


<p className="text-gray-500">
DC Fast Charger • 120kW
</p>




<div className="mt-6 grid gap-3">


{
[
"10:00 AM",
"12:00 PM",
"3:00 PM",
"6:00 PM"
].map(time=>(


<button

key={time}

onClick={()=>setSlot(time)}

className={`
rounded-xl
border
p-4
font-bold

${
slot===time
?
"bg-green-600 text-white"
:
"bg-white"
}

`}

>

{time}

</button>


))

}


</div>




<Link

href={
slot
?
"/stations/success"
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

Confirm Charging

</Link>



</div>


</div>


</DashboardLayout>


)

}
