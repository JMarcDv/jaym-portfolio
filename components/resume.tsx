import CardResume from "./cardResume";

export default function Resume() {
    return (
      <section id="resume" className='h-screen bg-gradient-to-b from-violet-950 to-blue-950'>
        <div className="flex justify-center items-center h-screen">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 w-1/3">
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">October 2022</time>
              <CardResume text1="Current" text2="Web developper" text3="Acensi" />
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">May 2022</time>
              <CardResume text1="Internship (6 months - 2022)" text2="Web developper" text3="Acensi" />
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">2020 - 2022</time>
              <CardResume text1="Master (2020 - 2022)" text2="Network" text3="Sorbonne Université" />
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">2017 - 2020</time>
              <CardResume text1="Licence (2017 - 2020)" text2="Computer Science and mathematics" text3="Université Paris Cité" />
            </li>
          </ol>
        </div>
      </section>
    )
}