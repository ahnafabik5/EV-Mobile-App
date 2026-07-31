import DashboardLayout from "@/components/layout/DashboardLayout";


export default function DashboardPage(){

return(

<DashboardLayout>

<div className="space-y-6">


<section
className="
overflow-hidden
rounded-[35px]
bg-gradient-to-br
from-emerald-400
via-green-500
to-green-700
p-5
text-white
shadow-2xl
sm:p-8
"
>


{/* Car Image */}

<div
className="
overflow-hidden
rounded-[28px]
bg-white/20
p-3
backdrop-blur
"
>


<img
src="/car.jpg"
alt="BYD ATTO 3"
className="
h-52
w-full
rounded-[22px]
object-cover
sm:h-64
"
/>


</div>



{/* Vehicle Info */}

<div className="mt-6">


<p className="text-sm text-green-100">
Vehicle Profile
</p>



<h1
className="
mt-2
text-4xl
font-black
tracking-tight
sm:text-5xl
"
>
BYD ATTO 3
</h1>



<p className="mt-2 text-lg text-green-50">
Premium Electric Sedan
</p>



<div
className="
mt-5
inline-flex
rounded-full
bg-white/20
px-5
py-2
text-sm
font-semibold
backdrop-blur
"
>

✓ Verified Vehicle

</div>


</div>





{/* Stats */}

<div
className="
mt-8
grid
grid-cols-2
gap-3
rounded-[28px]
bg-white
p-4
shadow-xl
"
>


<Stat
title="Battery"
value="85%"
/>


<Stat
title="Range"
value="380 KM"
/>


<Stat
title="Cycles"
value="412"
/>


<Stat
title="Warranty"
value="2 Years"
/>



</div>



</section>



</div>


</DashboardLayout>

)

}






function Stat({
title,
value,
}:{
title:string;
value:string;
}){


return(

<div
className="
rounded-2xl
bg-green-50
p-4
text-center
"
>


<h2
className="
text-2xl
font-black
text-emerald-600
"
>
{value}
</h2>



<p
className="
mt-1
text-sm
text-gray-500
"
>
{title}
</p>



</div>


)

}