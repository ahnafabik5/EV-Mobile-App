"use client";

import {
  Bell,
  Search,
  UserCircle,
  Menu,
} from "lucide-react";


type Props = {
  onMenuClick?:()=>void;
};


export default function Navbar({
  onMenuClick,
}:Props){


return(

<header
className="
sticky
top-0
z-30
border-b
border-gray-200
bg-white
"
>


<div
className="
flex
h-20
items-center
justify-between
px-4
sm:px-8
"
>



<div className="flex items-center gap-4">


<button
onClick={onMenuClick}
className="
rounded-xl
p-2
hover:bg-gray-100
lg:hidden
"
>

<Menu size={28}/>

</button>




<div>

<h2
className="
text-2xl
font-black
text-gray-900
sm:text-3xl
"
>
Arif Hasan
</h2>


<p
className="
text-sm
text-gray-500
"
>
BYD Seal Owner • Dhaka
</p>


</div>


</div>





<div
className="
flex
items-center
gap-3
"
>


<div className="hidden sm:block relative">

<Search
size={18}
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
/>


<input
placeholder="Search..."
className="
w-64
rounded-xl
border
border-gray-200
py-3
pl-11
pr-4
outline-none
focus:border-green-500
"
/>


</div>





<button
className="
rounded-xl
border
border-gray-200
p-3
hover:bg-gray-100
"
>

<Bell size={22}/>

</button>




<button
className="
rounded-full
border
border-green-100
bg-green-50
p-1
"
>

<UserCircle
size={42}
className="text-green-600"
/>


</button>




</div>



</div>


</header>


)

}
