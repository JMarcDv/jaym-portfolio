import { useTranslations } from 'next-intl';
import CardResume from './cardResume';

export default function Resume() {
  const t = useTranslations('Resume');
  return (
    <section id="resume" className="h-screen w-screen bg-gradient-to-b from-violet-950 to-blue-950">
      <div className="flex justify-center items-center h-screen w-screen">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 sm:w-2/3 md:w-2/3 lg:w-2/5 w-11/12">
          <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
            <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
            <time className="w-1/3 text-sm font-bold leading-none text-white">
              2022 - {t('current')}
            </time>
            <CardResume
              type={t('current')}
              title={t('jobName')}
              where="Acensi"
              imgSrc="/assets/logos/logo_a_acensi.webp"
            />
          </li>
          <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
            <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
            <time className="w-1/3 text-sm font-bold leading-none text-white">2020 - 2022</time>
            <CardResume
              type={t('master')}
              title={t('computerScience')}
              where={t('sorbonne')}
              imgSrc="/assets/logos/logo_sorbonne.webp"
            />
          </li>
          <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
            <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
            <time className="w-1/3 text-sm font-bold leading-none text-white">2017 - 2020</time>
            <CardResume
              type={t('bachelor')}
              title={t('mathAndComputerSci')}
              where={t('parisCite')}
              imgSrc="/assets/logos/logo_paris_cite.webp"
            />
          </li>
          <li data-aos="fade-in" className="mb-10 ms-4 flex items-center">
            <div className="absolute w-3 h-3 bg-slate-200 rounded-full -start-1.5 border border-white"></div>
            <time className="w-1/3 text-sm font-bold leading-none text-white">2014-2017</time>
            <CardResume
              type={t('baccalaureat')}
              title={t('honors')}
              where={t('college')}
              imgSrc="/assets/logos/logo_buffon.webp"
            />
          </li>
        </ol>
      </div>
    </section>
  );
}
