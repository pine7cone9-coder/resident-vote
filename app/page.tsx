"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
const apartments = [
  "대림아크로빌",
  "아카데미스위트"
];
  const [dong, setDong] = useState("");
  const [ho, setHo] = useState("");
  const [voteNumber, setVoteNumber] = useState("");
  const [vote, setVote] = useState("");
  const [apt, setApt] = useState("");

  const [message, setMessage] = useState("");


const handleSubmit = async () => {
  if (!apt) {
  setMessage("⚠ 아파트를 선택해주세요.");
  return;
}
  if (!dong) {
    setMessage("⚠ 동을 입력해주세요.");
    return;
  }

  if (!ho) {
    setMessage("⚠ 호수를 입력해주세요.");
    return;
  }

  if (!voteNumber) {
    setMessage("⚠ 투표번호를 입력해주세요.");
    return;
  }

  if (!vote) {
    setMessage("⚠ 찬성 또는 반대를 선택해주세요.");
    return;
  }

const { data: validCode, error: codeError } = await supabase
  .from("vote_codes")
  .select("code")
  .eq("code", voteNumber)
  .single();


if (codeError || !validCode) {
  setMessage("❌ 유효하지 않은 투표번호입니다.");
  return;
}

  const { error } = await supabase
    .from("votes")
    .insert([
      {
        apt: apt,
        code: voteNumber,
        choice: vote
      }
    ]);


  if (error) {
  console.log(error);
  setMessage("❌ " + error.message);
  return;
}


  setMessage("✅ 투표가 정상적으로 접수되었습니다.");


  setDong("");
  setHo("");
  setVoteNumber("");
  setVote("");

};


  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-5">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">


           {/* 상단 헤더 */}
        <header className="bg-sky-100 text-black p-6 text-center">
          <h1 className="text-xl font-bold">
            강남구보건소
          </h1>

          <h2 className="text-3xl font-bold mt-3">
            남부순환로 금연거리 
            <span className="text-red-500">
              확대
            </span>            
            지정 
              <br />
            입주민 투표
          </h2>
        </header>


        {/* 사진 영역 */}
        <div className="relative w-full h-auto">
  <Image
    src="/images/main.jpg"
    alt="금연거리 사진"
    width={800}
    height={500}
    className="w-full h-auto"
  />
</div>




        <section className="p-6 space-y-6">



          {/* 안내 */}
          <div className="border rounded-xl p-5 bg-gray-50">

            <h3 className="font-bold text-lg mb-3">
              📢 사업 안내
            </h3>
            <select

  value={apt}

  onChange={(e)=>setApt(e.target.value)}

  className="w-full border rounded-lg p-3 mb-3"

>

<option value="">
  아파트 선택
</option>


{
  apartments.map((item)=>(
    <option key={item} value={item}>
      {item}
    </option>
  ))
}


</select>


            <p className="text-gray-700 leading-relaxed">

              쾌적하고 건강한 생활환경 조성을 위해
              해당 구역을 금연거리로 지정하고자 합니다.
              주민 여러분의 소중한 의견을 부탁드립니다.

            </p>

          </div>




          {/* 기간 */}
          <div className="border rounded-xl p-5">

            <h3 className="font-bold text-lg mb-3">
              📅 투표 기간
            </h3>


            <p>
              2026년 07월 01일 ~ 07월 31일
            </p>

          </div>





          {/* 입력 */}
          <div>


            <h3 className="font-bold text-lg mb-3">
              🏠 참여자 정보
            </h3>



            <input

              value={dong}

              onChange={(e)=>setDong(e.target.value)}

              placeholder="동 입력"

              className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-sky-400"

            />




            <input

              value={ho}

              onChange={(e)=>setHo(e.target.value)}

              placeholder="호수 입력"

              className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-sky-400"

            />





            <input

              value={voteNumber}

              onChange={(e)=>setVoteNumber(e.target.value)}

              placeholder="투표번호 입력"

              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"

            />



          </div>






          {/* 찬반 */}
          <div>


            <h3 className="font-bold text-lg mb-3">
              의견 선택
            </h3>




            <label className="flex items-center gap-3 border rounded-lg p-4 mb-3 cursor-pointer hover:bg-green-50">


              <input

                type="radio"

                name="vote"

                value="찬성"

                checked={vote==="찬성"}

                onChange={(e)=>setVote(e.target.value)}

                className="w-5 h-5"

              />


              👍 찬성


            </label>






            <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-red-50">


              <input

                type="radio"

                name="vote"

                value="반대"

                checked={vote==="반대"}

                onChange={(e)=>setVote(e.target.value)}

                className="w-5 h-5"

              />


              👎 반대


            </label>


          </div>







          {/* 버튼 */}

          <button

            onClick={handleSubmit}

            className="w-full bg-sky-500 text-white py-4 rounded-xl text-lg font-bold hover:bg-sky-600 transition"

          >

            투표하기

          </button>






          {/* 메시지 */}

          {
            message && (

              <div className="text-center font-bold text-blue-700">

                {message}

              </div>

            )
          }







          {/* 문의 */}

          <div className="border-t pt-5 text-gray-600 text-sm">


            <p>
              ☎ 문의처
            </p>


            <p>
              ○○구청 환경과 02-0000-0000
            </p>


          </div>



        </section>


      </div>

    </main>
  );
}