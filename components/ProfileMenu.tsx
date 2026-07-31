"use client";

import {useState} from "react";
import Link from "next/link";
import {
User,
Car,
Crown,
Settings,
LogOut,
ChevronDown,
} from "lucide-react";


export default function ProfileMenu(){


const [open,setOpen]=useState(false);



return(

<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-3
rounded-full
p-2
hover:bg-gray-100
"

>


<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-green-600
font-black
text-white
"
>

A

</div>



<div className="hidden sm:block text-left">


<p className="font-bold">
Arif Hasan
</p>


<p className="text-xs text-gray-500">
Premium Member
</p>


</div>



<ChevronDown size={18}/>


</button>





{
open && (

<div

className="
absolute
right-0
z-50
mt-3
w-72
rounded-3xl
border
bg-white
p-4
shadow-xl
"

>


<div
className="
mb-4
rounded-2xl
bg-green-50
p-4
"
>


<h2 className="font-black">
Arif Hasan
</h2>


<p className="text-sm text-gray-500">
BYD Seal
</p>


</div>





<MenuItem

icon={<User/>}

title="My Profile"

href="/settings/profile"

/>




<MenuItem

icon={<Car/>}

title="Vehicle Details"

href="/dashboard"

/>





<MenuItem

icon={<Crown/>}

title="Premium Membership"

href="/membership"

/>





<MenuItem

icon={<Settings/>}

title="Settings"

href="/settings"

/>





<button

className="
mt-3
flex
w-full
items-center
gap-3
rounded-xl
p-3
font-bold
text-red-600
hover:bg-red-50
"

>

<LogOut size={20}/>

Logout

</button>




</div>

)

}



</div>

)

}






function MenuItem({
icon,
title,
href,
}:{
icon:React.ReactNode;
title:string;
href:string;
}){


return(

<Link

href={href}

className="
flex
items-center
gap-4
rounded-xl
p-3
font-semibold
hover:bg-green-50
"

>


<div className="text-green-600">

{icon}

</div>


{title}


</Link>

)

}
