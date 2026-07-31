import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Wallet,
  Leaf,
  TrendingDown,
  Calculator,
} from "lucide-react";


export default function FuelPage(){

return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Fuel Savings
</h1>


<p className="text-gray-500">
Track how much your EV saves every month.
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


<p className="text-green-100">
Total Savings
</p>


<h2 className="mt-2 text-5xl font-black">
৳45,000
</h2>


<p className="mt-2">
Saved by driving electric
</p>


</section>







<div className="grid gap-4 sm:grid-cols-3">


<Card
icon={<Wallet/>}
title="Monthly"
value="৳3,500"
/>


<Card
icon={<TrendingDown/>}
title="Fuel Avoided"
value="120L"
/>


<Card
icon={<Leaf/>}
title="CO₂ Saved"
value="248 KG"
/>


</div>






<Link

href="/fuel/calculator"

className="
flex
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

<Calculator size={20}/>

Savings Calculator

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
