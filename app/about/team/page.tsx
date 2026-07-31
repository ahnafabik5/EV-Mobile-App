import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function Team(){


return(

<DashboardLayout>

<div className="space-y-6">


<h1 className="text-4xl font-black">
Our Team
</h1>


<div className="
rounded-3xl
bg-white
p-6
shadow
">


<h2 className="text-2xl font-bold">
EV Care Engineering Team
</h2>


<p className="mt-3 text-gray-500">
Software engineers, EV specialists and customer support experts working together.
</p>


</div>



<Link
href="/about/contact"
className="
block
rounded-xl
bg-green-600
p-4
text-center
font-bold
text-white
"
>

Contact Team

</Link>


</div>

</DashboardLayout>

)

}
