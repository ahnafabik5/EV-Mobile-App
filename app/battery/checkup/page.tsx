"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function CheckupPage(){


const [date,setDate]=useState("");



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Battery Checkup
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
Select Vehicle
</h2>


<select
className="
mt-4
w-full
rounded-xl
border
p-4
"
>

<option>
BYD ATTO 3
</option>

<option>
Tesla Model 3
</option>

</select>





<h2 className="mt-6 text-2xl font-bold">
Choose Date
</h2>



<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

className="
mt-4
w-full
rounded-xl
border
p-4
"

/>





<Link

href={
date
?
"/battery/checkup/success"
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

Confirm Checkup

</Link>



</div>



</div>


</DashboardLayout>

)

}
