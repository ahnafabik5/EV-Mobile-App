import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
CheckCircle,
Bell,
Navigation
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
max-w-md
rounded-[35px]
bg-white
p-8
text-center
shadow-xl
"
>


<CheckCircle
size={90}
className="
mx-auto
text-green-600
"
/>


<h1 className="mt-5 text-3xl font-black">
Charging Reserved!
</h1>


<p className="mt-3 text-gray-500">
Your charging slot has been successfully booked.
</p>




<div className="mt-6 rounded-2xl bg-green-50 p-5">


<p className="font-bold">
Gulshan Super Hub
</p>


<p className="mt-2 text-green-700 font-black">
10:00 AM
</p>


</div>





<button
className="
mt-6
flex
w-full
justify-center
gap-2
rounded-xl
bg-green-600
p-4
font-bold
text-white
"
>

<Bell/>

Add Reminder

</button>




<button
className="
mt-3
flex
w-full
justify-center
gap-2
rounded-xl
bg-gray-900
p-4
font-bold
text-white
"
>

<Navigation/>

Get Direction

</button>



<Link
href="/dashboard"
className="
mt-5
block
text-green-600
font-bold
"
>
Back Dashboard
</Link>



</div>


</div>


</DashboardLayout>

)

}
