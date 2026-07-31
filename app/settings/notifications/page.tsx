"use client";

import {useState} from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
Bell,
CheckCircle,
BatteryCharging,
Wrench,
Zap,
} from "lucide-react";


export default function NotificationsPage(){


const [charging,setCharging]=useState(true);
const [battery,setBattery]=useState(true);
const [service,setService]=useState(true);
const [saved,setSaved]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Notification Settings
</h1>


<p className="text-gray-500">
Control your EV alerts and reminders.
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



<Setting

icon={<Zap/>}

title="Charging Reminder"

desc="Get notified before charging time"

value={charging}

toggle={()=>setCharging(!charging)}

/>




<Setting

icon={<BatteryCharging/>}

title="Battery Alert"

desc="Receive battery health warnings"

value={battery}

toggle={()=>setBattery(!battery)}

/>





<Setting

icon={<Wrench/>}

title="Service Reminder"

desc="Never miss maintenance"

value={service}

toggle={()=>setService(!service)}

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

Save Preferences

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

Notification Settings Saved

</div>

)

}




</div>


</div>


</DashboardLayout>


)

}







function Setting({
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
