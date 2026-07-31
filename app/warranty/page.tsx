import DashboardLayout from "@/components/layout/DashboardLayout";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";


export default function WarrantyPage() {

  return (

    <DashboardLayout>


      <div className="space-y-6">


        {/* Back */}

        <Link
          href="/dashboard"
          className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-green-100
          px-4
          py-2
          font-semibold
          text-green-700
          "
        >

          <ArrowLeft size={18}/>

          Back

        </Link>





        {/* Hero */}

        <section
          className="
          rounded-[32px]
          bg-gradient-to-br
          from-emerald-500
          to-green-700
          p-6
          text-white
          shadow-xl
          sm:p-8
          "
        >


          <div className="flex items-center gap-4">


            <div
              className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/20
              "
            >

              <ShieldCheck size={38}/>

            </div>



            <div>

              <p className="text-sm text-green-100">
                Vehicle Protection
              </p>


              <h1 className="text-3xl font-black sm:text-5xl">
                Warranty
              </h1>


            </div>


          </div>


        </section>






        {/* Warranty Certificate */}


        <section
          className="
          rounded-[32px]
          border
          border-gray-200
          bg-white
          p-6
          shadow-lg
          sm:p-8
          "
        >


          <div
            className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
            "
          >


            <div>


              <h2
                className="
                text-3xl
                font-black
                text-gray-900
                "
              >
                Warranty
                <br/>
                Certificate
              </h2>



              <p
                className="
                mt-3
                max-w-xs
                text-gray-500
                "
              >
                Download your official warranty document.
              </p>


            </div>





            <button
              className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-emerald-600
              px-6
              py-4
              font-bold
              text-white
              transition
              hover:bg-emerald-700
              sm:w-auto
              "
            >

              <Download size={22}/>

              Download

            </button>



          </div>


        </section>







        {/* Coverage */}


        <section
          className="
          rounded-[32px]
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
          "
        >


          <h2 className="text-2xl font-bold text-gray-900">
            Coverage Details
          </h2>



          <div className="mt-5 space-y-4">


            <Item text="Battery warranty coverage" />

            <Item text="Motor and electrical system protection" />

            <Item text="Free service support included" />


          </div>



        </section>




      </div>


    </DashboardLayout>

  );

}







function Item({
  text,
}:{
  text:string;
}){

  return (

    <div
      className="
      flex
      items-center
      gap-3
      rounded-xl
      bg-green-50
      p-4
      "
    >

      <CheckCircle
        className="text-green-600"
        size={22}
      />


      <span className="text-gray-700">
        {text}
      </span>


    </div>

  );

}