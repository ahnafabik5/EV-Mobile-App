import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";


export default function NotificationDetail(){

return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Notification Details
</h1>



<div className="
rounded-3xl
bg-white
p-6
shadow-xl
"
>


<h2 className="text-2xl font-black">
Vehicle Update
</h2>


<p className="mt-4 text-gray-500">
Your BYD ATTO 3 system has generated a new update.
Battery status, charging schedule and maintenance information are available.
</p>



<div className="
mt-5
rounded-2xl
bg-green-50
p-5
"
>

<h3 className="font-bold">
More Information
</h3>


<ul className="mt-3 space-y-2 text-gray-600">

<li>✓ Battery health checked</li>

<li>✓ Vehicle performance normal</li>

<li>✓ Next service reminder active</li>

</ul>


</div>



<Link

href="/dashboard"

className="
mt-6
block
rounded-xl
bg-green-600
p-4
text-center
font-bold
text-white
"

>

Go To Dashboard

</Link>


</div>


</div>


</DashboardLayout>

)

}
