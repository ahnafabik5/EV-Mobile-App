"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Lock,
  ShieldCheck,
  Smartphone,
  CheckCircle,
} from "lucide-react";


export default function SecurityPage(){


const [twoStep,setTwoStep]=useState(true);
const [saved,setSaved]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Account Security
</h1>


<p className="text-gray-500">
Protect your EV Care account.
</p>






<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
space-y-5
"
>





<div className="
flex
items-center
gap-4
rounded-2xl
bg-green-50
p-5
">


<ShieldCheck
className="text-green-600"
size={35}
/>


<div>

<h2 className="font-bold text-xl">
Security Status
</h2>


<p className="text-green-600 font-semibold">
Protected
</p>


</div>


</div>







<div className="
rounded-2xl
bg-gray-50
p-5
"
>


<div className="flex items-center gap-4">


<Lock className="text-green-600"/>


<div>

<h3 className="font-bold">
Password
</h3>


<p className="text-sm text-gray-500">
Last changed 30 days ago
</p>


</div>


</div>



<button
className="
mt-4
rounded-xl
bg-gray-900
px-5
py-3
font-bold
text-white
"
>

Change Password

</button>


</div>







<div
className="
flex
items-center
justify-between
rounded-2xl
bg-gray-50
p-5
"
>


<div className="flex items-center gap-4">


<Smartphone
className="text-green-600"
/>


<div>

<h3 className="font-bold">
Two-Step Verification
</h3>


<p className="text-sm text-gray-500">
Extra login protection
</p>


</div>


</div>





<button

onClick={()=>setTwoStep(!twoStep)}

className={`
rounded-full
px-5
py-2
font-bold
text-white

${
twoStep
?
"bg-green-600"
:
"bg-gray-400"
}

`}
>

{
twoStep
?
"ON"
:
"OFF"
}

</button>



</div>








<button

onClick={()=>setSaved(true)}

className="
w-full
rounded-xl
bg-green-600
p-4
font-bold
text-white
"

>

Save Security Settings

</button>







{
saved && (

<div
className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-green-50
p-4
font-bold
text-green-700
"
>

<CheckCircle/>

Account Protected Successfully

</div>

)

}





</div>



</div>


</DashboardLayout>


)

}
