import CardResume from "./cardResume";

export default function Resume() {
    return (
      <section id="resume" className='h-screen w-screen bg-gradient-to-b from-violet-950 to-blue-950'>
        <div className="flex justify-center items-center h-screen w-screen">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 sm:w-2/3 md:w-2/3 lg:w-2/5 w-11/12">
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">Mai 2022</time>
              <CardResume type="Current" title="Web developper" where="Acensi" imgSrc="/assets/logos/logo_a_acensi.webp"/>
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">2020 - 2022</time>
              <CardResume type="Master" title="Informatique réseaux" where="Sorbonne Université" imgSrc="/assets/logos/logo_sorbonne.webp"/>
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">2017 - 2020</time>
              <CardResume type="Licence" title="Mathématiques et Informatique" where="Université Paris Cité" imgSrc="/assets/logos/logo_paris_cite.webp"/>
            </li>
            <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
              <time className="w-1/3 text-sm font-bold leading-none text-white">2014-2017</time>
              <CardResume type="Baccalauréat" title="Mention assez bien" where="Lycée Buffon Paris 15" imgSrc="/assets/logos/logo_buffon.webp"/>
            </li>
          </ol>
        </div>
      </section>
    )
}