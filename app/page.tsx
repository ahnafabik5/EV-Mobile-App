import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
Zap,
Wrench,
Car,
BatteryCharging,
Users,
} from "lucide-react";


export default function Home(){


return(

<DashboardLayout>


<div className="space-y-8">


<section
className="
rounded-[45px]
bg-gradient-to-br
from-green-500
to-emerald-800
p-8
text-white
shadow-2xl
"
>


<p className="text-green-100">
Welcome to EV Care Bangladesh
</p>


<h1 className="
mt-3
text-5xl
font-black
"
>

Drive The Future ⚡

</h1>


<p className="
mt-4
text-lg
text-green-50
"
>

Premium electric vehicle management platform.

</p>



<img

src="/car.jpg"

className="
mt-8
h-72
w-full
rounded-[35px]
object-cover
"

alt="EV"

/>


</section>





<div
className="
grid
grid-cols-2
gap-5
"
>


<Action
title="Charging"
icon={<Zap/>}
href="/stations"
/>


<Action
title="About Us"
icon={<Users/>}
href="/about"
/>


<Action
title="Service"
icon={<Wrench/>}
href="/service"
/>


<Action
title="Battery"
icon={<BatteryCharging/>}
href="/battery"
/>


</div>





<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
"
>

<h2 className="text-3xl font-black">
Your EV Journey Starts Here
</h2>


<p className="mt-3 text-gray-500">
Monitor, maintain and optimize your electric vehicle.
</p>


</div>




</div>


</DashboardLayout>

)

}




function Action({
title,
icon,
href
}:any){


return(

<Link

href={href}

className="
rounded-3xl
bg-white
p-6
shadow-lg
hover:bg-green-50
transition
"

>


<div className="text-green-600">
{icon}
</div>


<h2 className="
mt-4
font-black
text-xl
"
>

{title}

</h2>


<p className="mt-2 text-green-600">
Click →
</p>


</Link>

)

}
