import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
  CheckCircle,
  Bell,
} from "lucide-react";


export default function SuccessPage(){


return(

<DashboardLayout>


<div
className="
flex
min-h-[70vh]
items-center
justify-center
"
>


<div
className="
w-full
max-w-md
rounded-[35px]
bg-white
p-8
text-center
shadow-xl
border
"
>


<CheckCircle
size={90}
className="mx-auto text-green-600"
/>



<h1 className="
mt-5
text-3xl
font-black
">
Maintenance Scheduled!
</h1>



<p className="
mt-3
text-gray-500
">
Your vehicle maintenance appointment has been successfully booked.
</p>




<div className="
mt-6
rounded-2xl
bg-green-50
p-5
">


<p className="font-bold">
Vehicle
</p>


<p className="
mt-2
text-2xl
font-black
text-green-700
">
BYD ATTO 3
</p>



<p className="mt-3 font-semibold">
Service: Full Vehicle Check
</p>


<p className="mt-1 text-gray-500">
Date: Tomorrow 10:00 AM
</p>


</div>





<button
className="
mt-6
flex
w-full
items-center
justify-center
gap-2
rounded-xl
bg-green-600
p-4
font-bold
text-white
"
>

<Bell size={20}/>

Set Reminder

</button>





<Link
href="/dashboard"
className="
mt-5
block
font-bold
text-green-600
"
>
Back to Dashboard
</Link>



</div>


</div>


</DashboardLayout>

)

}
