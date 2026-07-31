import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
BatteryCharging,
Zap,
Wrench,
Car,
Leaf,
MapPin,
ArrowRight,
} from "lucide-react";


export default function HomePage(){


return(

<DashboardLayout>


<div className="space-y-6">


{/* Welcome */}

<div>

<p className="text-gray-500">
Good Evening
</p>


<h1 className="text-4xl font-black">
Welcome back, Arif 👋
</h1>


<p className="mt-2 text-gray-500">
Your EV is performing perfectly today.
</p>


</div>






{/* Car Hero */}


<section
className="
relative
overflow-hidden
rounded-[40px]
bg-gradient-to-br
from-green-500
to-emerald-700
p-6
text-white
shadow-2xl
"
>



<img

src="/car.jpg"

alt="BYD ATTO 3"

className="
h-64
w-full
rounded-[30px]
object-cover
"

 />





<div className="mt-5">


<p className="text-green-100">
Premium Electric Sedan
</p>


<h2 className="
text-4xl
font-black
">

BYD ATTO 3

</h2>


<div className="
mt-4
inline-flex
rounded-full
bg-white/20
px-5
py-2
font-bold
">

⚡ EV Active

</div>


</div>




</section>







{/* Stats */}


<div
className="
grid
grid-cols-2
gap-4
"
>


<Stat
title="Battery"
value="85%"
icon={<BatteryCharging/>}
/>


<Stat
title="Range"
value="380 KM"
icon={<Zap/>}
/>


<Stat
title="Health"
value="98%"
icon={<Leaf/>}
/>


<Stat
title="Warranty"
value="2 Years"
icon={<Wrench/>}
/>


</div>








{/* Quick Actions */}


<section
className="
rounded-3xl
bg-white
p-5
shadow-lg
"
>


<h2 className="text-2xl font-black">
Quick Actions
</h2>




<div className="
mt-5
grid
grid-cols-2
gap-4
"
>


<Action
title="Charging"
href="/stations"
icon={<Zap/>}
/>


<Action
title="Service"
href="/maintenance"
icon={<Wrench/>}
/>


<Action
title="Roadside"
href="/roadside"
icon={<Car/>}
/>


<Action
title="Battery"
href="/battery"
icon={<BatteryCharging/>}
/>


</div>



</section>







{/* Nearby */}

<section
className="
rounded-3xl
bg-green-50
p-5
"
>


<div className="flex items-center gap-3">


<MapPin
className="text-green-600"
/>


<h2 className="text-xl font-black">
Nearby Charger
</h2>


</div>



<p className="mt-3 text-gray-600">
Gulshan Super Hub • 2.1 KM away
</p>



<Link

href="/stations"

className="
mt-4
flex
items-center
gap-2
font-bold
text-green-700
"

>

Find Charger

<ArrowRight size={18}/>

</Link>


</section>





</div>


</DashboardLayout>


)

}






function Stat({
title,
value,
icon
}:{
title:string;
value:string;
icon:React.ReactNode;
}){


return(

<div
className="
rounded-3xl
bg-white
p-5
shadow
"
>


<div className="text-green-600">
{icon}
</div>


<h3 className="mt-4 text-sm text-gray-500">
{title}
</h3>


<p className="
mt-2
text-3xl
font-black
text-gray-900
"
>

{value}

</p>


</div>

)

}






function Action({
title,
href,
icon
}:{
title:string;
href:string;
icon:React.ReactNode;
}){


return(

<Link

href={href}

className="
flex
flex-col
items-center
justify-center
rounded-3xl
bg-gray-50
p-5
font-bold
transition
hover:bg-green-50
"

>

<div className="text-green-600">
{icon}
</div>


<p className="mt-3">
{title}
</p>


</Link>


)

}
