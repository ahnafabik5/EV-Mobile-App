import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  History,
  CheckCircle,
} from "lucide-react";


const records=[

{
title:"Battery Inspection",
date:"12 July 2026",
status:"Completed",
},

{
title:"Software Update",
date:"20 May 2026",
status:"Completed",
},

{
title:"Full Vehicle Service",
date:"15 March 2026",
status:"Completed",
},

];


export default function HistoryPage(){


return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Service History
</h1>


<p className="text-gray-500">
View your previous maintenance records.
</p>




<div className="space-y-5">


{
records.map((item)=>(


<div
key={item.title}
className="
rounded-3xl
bg-white
p-6
shadow-lg
border
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

<History/>

</div>


<div>

<h2 className="text-xl font-bold">
{item.title}
</h2>


<p className="text-gray-500">
{item.date}
</p>

</div>


</div>




<div className="
mt-5
flex
items-center
justify-between
">


<span
className="
flex
items-center
gap-2
font-semibold
text-green-600
"
>

<CheckCircle size={18}/>

{item.status}

</span>




<Link

href="/history/details"

className="
rounded-xl
bg-green-600
px-5
py-3
font-bold
text-white
"

>

View Details

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
