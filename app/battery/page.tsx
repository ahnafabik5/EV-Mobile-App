import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
BatteryCharging,
Thermometer,
Activity,
} from "lucide-react";


export default function BatteryPage(){

return(

<DashboardLayout>

<div className="space-y-6">


<h1 className="text-4xl font-black">
Battery Health
</h1>


<p className="text-gray-500">
Monitor your EV battery performance.
</p>




<section
className="
rounded-[32px]
bg-gradient-to-br
from-green-500
to-green-700
p-6
text-white
shadow-xl
"
>


<div className="flex items-center gap-4">


<div className="rounded-2xl bg-white/20 p-4">

<BatteryCharging size={40}/>

</div>



<div>

<p className="text-green-100">
Health Score
</p>

<h2 className="text-5xl font-black">
98%
</h2>


</div>


</div>


</section>





<div className="grid gap-4 sm:grid-cols-2">


<Card
icon={<Thermometer/>}
title="Temperature"
value="29°C"
/>


<Card
icon={<Activity/>}
title="Charging Cycles"
value="412"
/>



</div>





<Link

href="/battery/checkup"

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

Schedule Battery Check

</Link>



</div>


</DashboardLayout>

)

}




function Card({
icon,
title,
value,
}:{
icon:React.ReactNode;
title:string;
value:string;
}){


return(

<div className="rounded-3xl bg-white p-6 shadow">

<div className="text-green-600">
{icon}
</div>


<h3 className="mt-4 font-bold">
{title}
</h3>


<p className="mt-2 text-3xl font-black text-green-600">
{value}
</p>


</div>

)

}
