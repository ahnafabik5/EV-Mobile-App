import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Leaf,
  Trees,
  Cloud,
  Award,
} from "lucide-react";


export default function AnalyticsPage(){

return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Environmental Impact
</h1>


<p className="text-gray-500">
See how your EV helps the planet.
</p>





<section
className="
rounded-[32px]
bg-gradient-to-br
from-green-500
to-emerald-700
p-6
text-white
shadow-xl
"
>


<div className="flex items-center gap-4">


<div
className="
rounded-2xl
bg-white/20
p-4
"
>

<Leaf size={40}/>

</div>



<div>


<p className="text-green-100">
Green Score
</p>


<h2 className="text-5xl font-black">
96%
</h2>


</div>


</div>


</section>








<div className="grid gap-4 sm:grid-cols-3">


<Card
icon={<Cloud/>}
title="CO₂ Saved"
value="248 KG"
/>



<Card
icon={<Trees/>}
title="Trees Equivalent"
value="11"
/>



<Card
icon={<Award/>}
title="Achievement"
value="Green Driver"
/>



</div>







<Link

href="/analytics/achievement"

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

View Achievement

</Link>




</div>


</DashboardLayout>


)

}







function Card({
icon,
title,
value,
}:{
icon:React.ReactNode;
title:string;
value:string;
}){


return(

<div
className="
rounded-3xl
bg-white
p-5
shadow
"
>


<div className="text-green-600">
{icon}
</div>


<h3 className="mt-4 font-bold">
{title}
</h3>


<p className="mt-2 text-2xl font-black text-green-600">
{value}
</p>


</div>

)

}
