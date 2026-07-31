"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Award,
  Share2,
  Leaf,
} from "lucide-react";


export default function AchievementPage(){


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
border
"
>


<Award
size={90}
className="
mx-auto
text-yellow-500
"
/>



<h1
className="
mt-5
text-3xl
font-black
"
>

Green Driver

</h1>




<p className="
mt-3
text-gray-500
"
>

Your driving habits are helping create a cleaner Bangladesh.

</p>





<div
className="
mt-6
rounded-2xl
bg-green-50
p-5
"
>


<Leaf
className="
mx-auto
text-green-600
"
/>


<h2 className="
mt-3
text-2xl
font-black
text-green-700
"
>

248 KG CO₂ Saved

</h2>


<p className="mt-2 text-gray-500">
Equivalent to planting 11 trees.
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

<Share2 size={20}/>

Share Achievement

</button>




</div>


</div>


</DashboardLayout>


)

}
