import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
Building2,
Users,
Phone,
Globe
} from "lucide-react";


const items=[
{
title:"Our Team",
desc:"Meet the people behind EV Care",
icon:Users,
href:"/about/team"
},
{
title:"Contact Us",
desc:"Get support from our team",
icon:Phone,
href:"/about/contact"
},
{
title:"Social Media",
desc:"Follow EV Care updates",
icon:Globe,
href:"/about/social"
}
];


export default function AboutPage(){


return(

<DashboardLayout>

<div className="space-y-6">


<h1 className="text-4xl font-black">
About EV Care
</h1>


<p className="text-gray-500">
Building the future of electric mobility in Bangladesh.
</p>



<div
className="
rounded-[35px]
bg-gradient-to-br
from-green-500
to-emerald-700
p-8
text-white
shadow-xl
"
>

<Building2 size={45}/>

<h2 className="mt-4 text-3xl font-black">
EV Care Bangladesh
</h2>

<p className="mt-3">
A smart EV ecosystem for charging, maintenance and vehicle intelligence.
</p>

</div>





<div className="space-y-4">


{
items.map((item)=>{

const Icon=item.icon;


return(

<Link

key={item.title}

href={item.href}

className="
group
flex
items-center
gap-5
rounded-3xl
bg-white
p-6
shadow-lg
border
transition
duration-300
hover:-translate-y-2
hover:shadow-2xl
hover:bg-green-50
"

>


<div
className="
rounded-2xl
bg-green-100
p-4
text-green-600
group-hover:scale-110
transition
"
>

<Icon size={28}/>

</div>



<div>

<h2 className="
text-xl
font-black
"
>

{item.title}

</h2>


<p className="text-gray-500">
{item.desc}
</p>


<p className="
mt-2
font-bold
text-green-600
"
>

Click →

</p>


</div>



</Link>


)

})

}


</div>



</div>

</DashboardLayout>


)

}
