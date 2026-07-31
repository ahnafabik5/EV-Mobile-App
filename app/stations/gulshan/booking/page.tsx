"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function Booking(){


const [slot,setSlot]=useState("");



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Book Charging Slot
</h1>



<div className="
rounded-3xl
p-6
space-y-4
"
>


<h2 className="text-2xl font-black">
Select Time
</h2>


{

["10:00 AM","2:00 PM","6:00 PM"].map(time=>(


<button

key={time}

onClick={()=>setSlot(time)}

className="
block
w-full
rounded-xl
bg-white/10
p-4
"

>

{time}

</button>


))

}



{
slot &&

<Link

href="/stations/gulshan/booking/success"

className="
block
rounded-xl
bg-green-600
p-4
text-center
font-black
"

>

Confirm Booking

</Link>

}



</div>



</div>


</DashboardLayout>

)

}
