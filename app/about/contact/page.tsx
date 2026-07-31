import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";


export default function Contact(){


return(

<DashboardLayout>

<div className="space-y-6">


<h1 className="text-4xl font-black">
Contact Us
</h1>



<div className="
rounded-3xl
bg-white
p-6
shadow
space-y-4
">

<p>
📍 Dhaka, Bangladesh
</p>

<p>
📞 +880 1700-000000
</p>

<p>
✉ support@evcare.com
</p>


</div>



<Link
href="/about/social"
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

Visit Social Media

</Link>


</div>

</DashboardLayout>


)

}
