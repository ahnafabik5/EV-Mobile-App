import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  BatteryCharging,
  Cpu,
  Activity,
  Zap,
} from "lucide-react";


export default function BatteryPage(){

return(

<DashboardLayout>


<div className="space-y-6">


{/* Hero */}


<section
className="
rounded-[32px]
bg-gradient-to-br
from-emerald-500
to-green-700
p-5
text-white
shadow-xl
sm:p-8
"
>


<div className="flex flex-col gap-5">


<div
className="
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-white/20
"
>

<BatteryCharging
size={45}
/>

</div>



<div>

<p className="text-sm text-green-100">
Battery Health
</p>


<h1
className="
mt-2
text-4xl
font-black
sm:text-5xl
"
>
Excellent
</h1>


<p className="mt-2 text-green-50">
Your EV battery condition is healthy.
</p>


</div>


</div>


</section>






{/* AI Prediction */}


<section
className="
w-full
overflow-hidden
rounded-[32px]
border
border-gray-200
bg-white
p-5
shadow-lg
sm:p-8
"
>


<div
className="
flex
flex-col
gap-5
sm:flex-row
sm:items-center
sm:justify-between
"
>


<div className="flex items-center gap-4">


<div
className="
flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-full
bg-green-100
"
>

<Cpu
className="text-green-600"
/>

</div>



<div>


<h2
className="
text-3xl
font-black
leading-tight
text-gray-900
"
>
AI Battery Prediction
</h2>


<p className="mt-2 text-gray-500">
Intelligent health analysis powered by AI
</p>


</div>


</div>



<span
className="
w-fit
rounded-full
bg-green-100
px-5
py-2
font-semibold
text-green-700
"
>
AI Active
</span>



</div>




<div className="mt-8 space-y-4">


<Info
title="Estimated Battery Life"
value="8.4 Years"
/>


<Info
title="Battery Temperature"
value="29°C"
/>


<Info
title="Charging Efficiency"
value="96%"
/>


</div>


</section>






{/* Analytics */}


<div className="grid gap-5 sm:grid-cols-2">


<Card
icon={<Activity />}
title="Health Score"
value="98%"
/>


<Card
icon={<Zap />}
title="Fast Charging"
value="Supported"
/>


</div>




</div>


</DashboardLayout>

)

}






function Info({
title,
value,
}:{
title:string;
value:string;
}){


return(

<div
className="
flex
flex-col
gap-2
rounded-2xl
bg-green-50
p-5
sm:flex-row
sm:items-center
sm:justify-between
"
>

<span className="text-gray-600">
{title}
</span>


<strong className="text-2xl text-green-700">
{value}
</strong>


</div>

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

<div
className="
rounded-3xl
border
border-gray-200
bg-white
p-6
shadow-sm
"
>


<div className="text-green-600">
{icon}
</div>


<h3 className="mt-4 text-xl font-bold">
{title}
</h3>


<p className="mt-3 text-3xl font-black text-green-600">
{value}
</p>


</div>

)

}