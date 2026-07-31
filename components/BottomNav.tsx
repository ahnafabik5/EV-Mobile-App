"use client";

import Link from "next/link";
import {
  Zap,
  Wrench,
  Home,
  History,
  MoreHorizontal,
} from "lucide-react";


export default function BottomNav(){

return(

<nav
className="
fixed
bottom-0
left-0
z-50
flex
h-20
w-full
items-center
justify-around
border-t
border-gray-200
bg-white
shadow-xl
lg:hidden
"
>


<Link
href="/stations"
className="flex flex-col items-center text-gray-500"
>
<Zap size={22}/>
<span className="text-xs">
Charging
</span>
</Link>



<Link
href="/service"
className="flex flex-col items-center text-gray-500"
>
<Wrench size={22}/>
<span className="text-xs">
Service
</span>
</Link>





<Link
href="/"
className="
relative
flex
flex-col
items-center
"
>

<div
className="
-translate-y-7
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-green-600
text-white
shadow-xl
ring-8
ring-white
"
>

<Home size={30}/>

</div>

<span
className="
-translate-y-5
text-xs
font-bold
text-green-600
"
>
Home
</span>


</Link>





<Link
href="/history"
className="flex flex-col items-center text-gray-500"
>
<History size={22}/>
<span className="text-xs">
History
</span>
</Link>





<button
className="flex flex-col items-center text-gray-500"
>
<MoreHorizontal size={22}/>
<span className="text-xs">
More
</span>
</button>



</nav>

)

}
