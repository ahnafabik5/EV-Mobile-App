import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
CheckCircle,
Bell
} from "lucide-react";


export default function SuccessPage(){


return(

<DashboardLayout>


<div className="
flex
min-h-[70vh]
items-center
justify-center
">


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
className="mx-auto text-green-600"
/>


<h1 className="mt-5 text-3xl font-black">
Battery Check Scheduled!
</h1>



<p className="mt-3 text-gray-500">
Your battery inspection appointment is confirmed.
</p>




<div className="
mt-6
rounded-2xl
bg-green-50
p-5
">


<p className="font-bold">
BYD ATTO 3
</p>


<p className="mt-2 text-green-700 font-black">
Battery Inspection
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

Set Reminder

</button>




<Link
href="/dashboard"
className="
mt-4
block
font-bold
text-green-600
"
>

Back Dashboard

</Link>



</div>


</div>


</DashboardLayout>

)

}
