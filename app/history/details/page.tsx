"use client";

import {useState} from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Download,
  Star,
  CheckCircle,
} from "lucide-react";


export default function HistoryDetails(){


const [rating,setRating]=useState(0);

const [review,setReview]=useState(false);



return(

<DashboardLayout>


<div className="space-y-6">


<h1 className="text-4xl font-black">
Service Details
</h1>



<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>


<div className="flex items-center gap-3">


<CheckCircle
className="text-green-600"
/>


<h2 className="text-2xl font-bold">
Battery Inspection
</h2>


</div>




<div className="
mt-6
space-y-3
rounded-2xl
bg-green-50
p-5
">


<p>
Vehicle:
<b> BYD ATTO 3</b>
</p>


<p>
Date:
<b> 12 July 2026</b>
</p>


<p>
Technician:
<b> EV Care Team</b>
</p>


<p>
Status:
<b className="text-green-600">
 Completed
</b>
</p>


</div>






<button
className="
mt-6
flex
w-full
justify-center
items-center
gap-2
rounded-xl
bg-gray-900
p-4
font-bold
text-white
"
>


<Download size={20}/>

Download Invoice


</button>





</div>







<div
className="
rounded-3xl
bg-white
p-6
shadow-xl
border
"
>


<h2 className="text-2xl font-bold">
Rate Service
</h2>



<div className="
mt-5
flex
gap-3
"
>


{
[1,2,3,4,5].map((star)=>(


<button

key={star}

onClick={()=>setRating(star)}

>

<Star

size={35}

className={
star<=rating
?
"text-yellow-400 fill-yellow-400"
:
"text-gray-300"
}

/>

</button>


))

}


</div>





<textarea

placeholder="Write your feedback..."

className="
mt-5
h-32
w-full
rounded-xl
border
p-4
"

/>





<button

onClick={()=>setReview(true)}

className="
mt-4
w-full
rounded-xl
bg-green-600
p-4
font-bold
text-white
"

>

Submit Review

</button>





{
review && (

<div
className="
mt-5
rounded-xl
bg-green-50
p-4
text-center
font-bold
text-green-700
"
>

Thank you for your feedback! 🎉

</div>

)

}



</div>




<Link

href="/history"

className="
block
text-center
font-bold
text-green-600
"

>

Back to History

</Link>



</div>


</DashboardLayout>


)

}
