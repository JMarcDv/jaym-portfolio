'use client'
import { Image, Link } from "@heroui/react"
import { useTranslations } from "next-intl"
import { BiLogoGmail } from "react-icons/bi"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineSecurity } from "react-icons/md"

export default function First() {
  const t = useTranslations('First');
  const ageCalculator = () => {
    const birthDate = new Date(940284000000); // Yes this is my birth date :)
    const month_diff = Date.now() - birthDate.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
  }
    return (
      <section id="home" className="flex items-center h-screen relative justify-center w-screen bg-cover bg-center bg-gradient-to-b from-violet-900 to-violet-950">
        <div className='flex flex-col items-center justify-center w-11/12'>
          <div className='flex items-center'>
            <div className="lg:flex hidden">
              <Image
                isZoomed
                width={300}
                height={370}
                alt="Jean profile picture"
                src="/assets/logos/profilePic.webp"
              />
            </div>
            <div className="sm:m-5">
              <h1 className="flex">
                <p className="text-green-500">➜&nbsp;</p>
                <p className="text-blue-400">j_d_v_portfolio&nbsp;</p>
                <p className="text-blue-700">git:(</p>
                <p className="text-red-600">develop</p>
                <p className="text-blue-700">)</p>
                <p className="text-yellow-500">&nbsp;✗</p>
              </h1>
              <span>
                <p className="text-white">
                  {t('sentence1')}<strong className="text-yellow-300">{t('jobName')}</strong> :).<br />
                  {t('startSentence2')}{ageCalculator()} {t('sentence2')}<br />
                  {t('startSentence3')}<strong className="text-yellow-300">{t('webDevelopment')}</strong>{t('sentence3')}
                </p>
              </span>
              <span className="hidden sm:flex">
                <p className="text-white">
                  {t('sentence4')}<br />
                  {t('sentence5')}
                  <strong className="flex items-center text-cyan-200">{t('cybersecurity')}&nbsp;<MdOutlineSecurity /></strong>
                  {t('sentence6')}<strong className="text-cyan-200">{t('networks')}</strong>{t('endSentence6')}<br />
                  {t('sentence7')}<strong className="flex items-center text-yellow-300">{t('sentence8')}&nbsp;<FaCode /></strong>
                </p>
              </span>
              <p className="text-white">
                {t('currentJob')}
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col">
            <div className="flex items-center m-5 gap-2">
              <BiLogoGmail className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="mailto:jmdevera19@gmail.com">jmdevera19@gmail.com</Link>
            </div>
            <div className="flex items-center m-5 gap-2 ">
              <FaGithub className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="https://github.com/JMarcDv" target="_blank" rel="noopener noreferrer">Jean Dv</Link>
            </div>
            <div className="flex items-center m-5 gap-2">
              <FaLinkedin className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="https://www.linkedin.com/in/jean-de-vera/" target="_blank" rel="noopener noreferrer">Jean DE VERA</Link>
            </div>
          </div>
        </div>
      </section>
    )
}