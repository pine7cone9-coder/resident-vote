"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {

  const [agree, setAgree] = useState(0);
  const [disagree, setDisagree] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {

    const getResult = async () => {

      const { data, error } = await supabase
        .from("votes")
        .select("choice");


      if(error){
        console.log(error);
        return;
      }


      const yes = data.filter(
        (item)=>item.choice==="찬성"
      ).length;


      const no = data.filter(
        (item)=>item.choice==="반대"
      ).length;


      setAgree(yes);
      setDisagree(no);
      setTotal(data.length);

    };


    getResult();

  }, []);



  return (

    <main className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-8">

        <h1 className="text-2xl font-bold mb-8 text-center">
          금연거리 지정 투표 결과
        </h1>


        <div className="space-y-4 text-lg">


          <p>
            전체 투표수 :
            <b> {total}명</b>
          </p>


          <p className="text-green-600">
            👍 찬성 :
            <b> {agree}명</b>
          </p>


          <p className="text-red-600">
            👎 반대 :
            <b> {disagree}명</b>
          </p>


        </div>


      </div>

    </main>

  );

}