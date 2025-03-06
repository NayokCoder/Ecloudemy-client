import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ZeroToMastery = () => {
  return (
    <section className="py-16 px-4 md:px-16 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who is Zero To Mastery for?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Box - Fit Right In */}
        <div className="border-3 border-pink-500 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">You'll fit right in if:</h3>
          <ul className="space-y-4">
            {[
              {
                text: "You're struggling to make progress using free tutorials",
                desc: "that aren't giving you the structure or clear path to achieving your goals.",
              },

              {
                text: "You feel stuck.",
                desc: "You are sick of dreading Monday mornings, BUT you're willing to put in the hard work to make a change in your life.",
              },
              {
                text: "You can't or don’t want to spend $8,000+",
                desc: "on bootcamps/school but you're ready to take the next step in your career.",
              },
              {
                text: "You don’t want to learn alone.",
                desc: "You want to be part of a community of like-minded individuals who work together and help each other build their dream careers.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-5 items-start text-xl">
                {/* <FaCheckCircle className="text-pink-500 text-2xl mt-1 mr-3" /> */}
                <FaCheckCircle className="min-w-10 sm:w-16 text-3xl sm:text-4xl text-secondary " />
                <p>
                  <span className="font-semibold">{item.text}</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Box - Not for you */}
        <div className=" rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center text-gray-700 mb-4">We're not for you if:</h3>
          <ul className="space-y-4">
            {[
              {
                text: "You're mostly looking for high-level theory",
                desc: "and don’t want to get your hands dirty building real projects and learning from your mistakes.",
              },
              {
                text: "You're not ready to invest in yourself",
                desc: "and are looking for the cheapest way to learn. Want to learn to code for free? Use our free Learn to Code & Get Hired guide.",
              },
              {
                text: "You want to play games.",
                desc: "We teach the hard things that make you employable. We don’t make you play coding games & challenges that have no real-world value.",
              },
              {
                text: "You're not even sure if you want to pursue a career in tech.",
                desc: "If that’s the case, check out these Entry-Level Tech Jobs to first see if there’s a fit for you.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-5 items-start text-xl">
                <FaCheckCircle className="min-w-10 sm:w-16 text-3xl sm:text-4xl " />

                <p>
                  <span className="font-semibold">{item.text}</span> {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ZeroToMastery;
