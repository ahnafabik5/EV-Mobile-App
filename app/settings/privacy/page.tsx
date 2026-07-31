"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  MapPin,
  Share2,
  UserCheck,
  CheckCircle,
} from "lucide-react";


export default function PrivacyPage(){


const [location,setLocation]=useState(true);
const [sharing,setSharing]=useState(false);
const [visibility,setVisibility]=useState(true);
const [saved,setSaved]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Privacy Settings
</h1>


<p className="text-gray-500">
Control your data and privacy preferences.
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




<Option

icon={<MapPin/>}

title="Location Access"

desc="Allow location for charging and roadside help"

value={location}

toggle={()=>setLocation(!location)}

/>





<Option

icon={<Share2/>}

title="Data Sharing"

desc="Share driving insights for better service"

value={sharing}

toggle={()=>setSharing(!sharing)}

/>





<Option

icon={<UserCheck/>}

title="Profile Visibility"

desc="Allow profile information visibility"

value={visibility}

toggle={()=>setVisibility(!visibility)}

/>





<button

onClick={()=>setSaved(true)}

className="
mt-5
w-full
rounded-xl
bg-green-600
p-4
font-bold
text-white
"

>

Save Privacy Settings

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

Privacy Updated Successfully

</div>

)

}




</div>


</div>


</DashboardLayout>

)

}







function Option({
icon,
title,
desc,
value,
toggle,
}:{
icon:React.ReactNode;
title:string;
desc:string;
value:boolean;
toggle:()=>void;
}){


return(

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


<div className="text-green-600">
{icon}
</div>


<div>

<h3 className="font-bold">
{title}
</h3>


<p className="text-sm text-gray-500">
{desc}
</p>


</div>


</div>





<button

onClick={toggle}

className={`
rounded-full
px-5
py-2
font-bold
text-white

${
value
?
"bg-green-600"
:
"bg-gray-400"
}

`}

>

{
value
?
"ON"
:
"OFF"
}

</button>



</div>

)

}
