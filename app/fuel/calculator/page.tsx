"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function CalculatorPage(){


const [distance,setDistance]=useState("");
const [price,setPrice]=useState("");
const [result,setResult]=useState("");



function calculate(){

const km=Number(distance);
const fuel=Number(price);


const saving = km * fuel * 0.12;


setResult(
"৳" + Math.round(saving).toLocaleString()
);

}



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Savings Calculator
</h1>


<p className="text-gray-500">
Calculate your EV financial benefit.
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


<input

placeholder="Monthly Distance (KM)"

value={distance}

onChange={(e)=>setDistance(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>




<input

placeholder="Fuel Price per KM"

value={price}

onChange={(e)=>setPrice(e.target.value)}

className="
mt-4
w-full
rounded-xl
border
p-4
"

/>





<button

onClick={calculate}

className="
mt-5
w-full
rounded-xl
bg-green-600
p-4
font-bold
text-white
"

>

Calculate Saving

</button>






{
result && (

<div
className="
mt-6
rounded-2xl
bg-green-50
p-6
text-center
"
>


<p className="text-gray-500">
Estimated Monthly Saving
</p>


<h2 className="
mt-2
text-4xl
font-black
text-green-700
"
>

{result}

</h2>


</div>

)

}



</div>




</div>


</DashboardLayout>


)

}
