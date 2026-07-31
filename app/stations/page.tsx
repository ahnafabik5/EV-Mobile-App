import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  MapPin,
  Zap,
} from "lucide-react";


const stations=[

{
name:"Gulshan Super Hub",
distance:"2.1 KM",
slots:"6 Slots Available",
},

{
name:"Bashundhara EV Point",
distance:"4.8 KM",
slots:"4 Slots Available",
},

{
name:"Uttara Fast Charger",
distance:"7.3 KM",
slots:"8 Slots Available",
},

];


export default function StationsPage(){

return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Charging Stations
</h1>


<p className="text-gray-500">
Find and reserve your charging slot.
</p>




<div className="space-y-5">


{
stations.map((station)=>(


<div
key={station.name}
className="
rounded-3xl
border
bg-white
p-6
shadow-lg
"
>


<div className="flex items-center gap-4">


<div
className="
rounded-2xl
bg-green-100
p-4
text-green-600
"
>

<Zap/>

</div>


<div>

<h2 className="text-xl font-bold">
{station.name}
</h2>


<p className="text-gray-500">
{station.distance}
</p>

</div>


</div>




<div className="mt-5 flex items-center justify-between">


<span className="font-semibold text-green-600">
{station.slots}
</span>



<Link

href="/stations/booking"

className="
rounded-xl
bg-green-600
px-5
py-3
font-bold
text-white
"
>

Reserve

</Link>


</div>


</div>


))

}


</div>


</div>


</DashboardLayout>

)

}
