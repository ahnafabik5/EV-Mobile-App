import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
User,
Bell,
Shield,
Lock,
} from "lucide-react";


const items=[

{
title:"Profile",
desc:"Manage your personal information",
icon:User,
href:"/settings/profile",
},


{
title:"Notifications",
desc:"Control alerts and reminders",
icon:Bell,
href:"/settings/notifications",
},


{
title:"Privacy",
desc:"Manage your privacy settings",
icon:Shield,
href:"/settings/privacy",
},


{
title:"Account Security",
desc:"Protect your account",
icon:Lock,
href:"/settings/security",
},

];



export default function SettingsPage(){


return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Settings
</h1>


<p className="text-gray-500">
Customize your EV Care experience.
</p>




<div className="space-y-4">


{
items.map((item)=>{

const Icon=item.icon;


return(

<Link

key={item.title}

href={item.href}

className="
flex
items-center
gap-5
rounded-3xl
bg-white
p-6
shadow
border
transition
hover:shadow-lg
"

>


<div className="
rounded-2xl
bg-green-100
p-4
text-green-600
">

<Icon/>

</div>



<div>

<h2 className="text-xl font-bold">
{item.title}
</h2>


<p className="text-gray-500">
{item.desc}
</p>


</div>



</Link>

)

})

}


</div>


</div>


</DashboardLayout>

)

}
