export default function Home() {

  const topics = [
    "Indoor session",
    "Outdoor session",
    "Nutrition plan",
    "Gym session",
    "Warm-up & cool-down"
  ];

  return (
    <section className="py-3 px-3">
        <p className="text-center text-lg text-gray-500 mt-4 tracking-wide font-sans">We have hundreds of science-backed, articles on plans about how to eat, train, and think about health and fitness so you can<br className="hidden lg:block"/> Level Up!</p>
       
        <div className=" bg-white flex flex-col items-center px-4 mt-11">
        <h1 className=" text-4xl text-center font-bold font-sans tracking-wide">Topics</h1>
        <div className="w-full max-w-2xl flex flex-col space-y-4 mt-11">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="bg-gray-100  border-black rounded-md md:py-6 py-4 text-lg font-semibold hover:bg-gray-200 transition-colors font-sans border-2"
          >
            {topic}
          </button>
        ))}
      </div>
        </div>
    </section>
  )
}