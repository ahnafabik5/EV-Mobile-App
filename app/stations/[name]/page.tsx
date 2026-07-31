import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
Zap,
Clock,
MapPin,
BatteryCharging
} from "lucide-react";


export default function StationDetails(){

return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Charging Station
</h1>




<div className="
rounded-[40px]
p-6
"
>


<MapPin
className="text-green-400"
size={40}
/>


<h2 className="
mt-4
text-3xl
font-black
"
>

Gulshan EV Hub

</h2>


<p>
Premium fast charging station
</p>



<div className="
mt-5
grid
grid-cols-3
gap-3
"
>


<div className="rounded-2xl bg-white/10 p-4">
<Zap/>
150 KW
</div>


<div className="rounded-2xl bg-white/10 p-4">
<Clock/>
24/7
</div>


<div className="rounded-2xl bg-white/10 p-4">
<BatteryCharging/>
Fast
</div>



</div>



<Link

href="/stations/gulshan/booking"

className="
mt-6
block
rounded-2xl
bg-green-600
p-4
text-center
font-black
"

>

Click To Book

</Link>


</div>


</div>


</DashboardLayout>

)

}
