export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          ○○아파트
        </h1>

        <h2 className="text-xl text-center mt-2 mb-8">
          금연거리 지정 주민투표
        </h2>

        <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center mb-8">
          📷 금연거리 사진이 들어갈 자리
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <h3 className="font-bold mb-2">안내사항</h3>

          <p>
            금연거리 지정에 대한 입주민 의견을 수렴하기 위한
            온라인 투표입니다.
          </p>

          <p className="mt-2">
            세대당 1회만 참여할 수 있습니다.
          </p>
        </div>

        <input
          type="text"
          placeholder="동"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="text"
          placeholder="호수"
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="text"
          placeholder="투표번호"
          className="w-full border rounded-lg p-3 mb-6"
        />

        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-green-600 text-white p-3 rounded-lg">
            👍 찬성
          </button>

          <button className="flex-1 bg-red-600 text-white p-3 rounded-lg">
            👎 반대
          </button>
        </div>

        <button className="w-full bg-blue-700 text-white p-4 rounded-lg font-bold">
          투표하기
        </button>

      </div>
    </main>