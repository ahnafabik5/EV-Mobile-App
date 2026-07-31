"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  UserCircle,
  Car,
  MapPin,
  CheckCircle,
} from "lucide-react";


export default function ProfilePage(){


const [saved,setSaved]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
My Profile
</h1>


<p className="text-gray-500">
Manage your EV owner information.
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


<div className="flex items-center gap-5">


<div
className="
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-white/20
"
>

<UserCircle size={55}/>

</div>




<div>

<p className="text-green-100">
EV Owner
</p>


<h2 className="text-3xl font-black">
Arif Hasan
</h2>


<p>
Premium Member
</p>


</div>


</div>


</section>







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


<div className="flex items-center gap-4">

<UserCircle className="text-green-600"/>

<div>

<p className="text-sm text-gray-500">
Full Name
</p>

<h3 className="font-bold">
Arif Hasan
</h3>

</div>

</div>





<div className="flex items-center gap-4">

<Car className="text-green-600"/>

<div>

<p className="text-sm text-gray-500">
Vehicle
</p>

<h3 className="font-bold">
BYD Seal
</h3>

</div>

</div>






<div className="flex items-center gap-4">

<MapPin className="text-green-600"/>

<div>

<p className="text-sm text-gray-500">
Location
</p>

<h3 className="font-bold">
Dhaka, Bangladesh
</h3>

</div>

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

Save Changes

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

Profile Updated Successfully

</div>

)

}



</div>


</div>


</DashboardLayout>


)

}
