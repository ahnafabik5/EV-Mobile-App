import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function Success(){

return(

<DashboardLayout>

<div className="text-center space-y-6">


<div
className="
mx-auto
h-24
w-24
rounded-full
bg-green-500
flex
items-center
justify-center
text-5xl
animate-pulse
"
>
✓
</div>



<h1 className="text-5xl font-black">
Booking Confirmed
</h1>


<p>
Your charging appointment has been successfully booked.
</p>




<div
className="
rounded-3xl
p-6
"
>

<h2 className="text-2xl font-black">
Gulshan EV Hub
</h2>


<p>
BYD ATTO 3 charging session
</p>


<p className="mt-2">
Fast Charger • 150 KW
</p>


</div>




<Link

href="/notifications"

className="
block
rounded-xl
bg-green-600
p-4
font-black
text-center
"

>

Set Reminder

</Link>



</div>

</DashboardLayout>

)

}
