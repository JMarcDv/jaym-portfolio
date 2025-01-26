'use client'
import { Image, Link } from "@heroui/react"
import { BiLogoGmail } from "react-icons/bi"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineSecurity } from "react-icons/md"

export default function First() {
  const ageCalculator = () => {
    const birthDate = new Date("10/19/1999");
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
                  Hello ! Je suis Jean et je suis un <strong className="text-yellow-300">développeur full-stack</strong> :).<br />
                  J&apos;ai {ageCalculator()} ans et je vis dans la banlieue parisienne. <br />
                  Passionné par le <strong className="text-yellow-300">développement web / logiciel</strong> depuis la fin du Lycée (2016-2017)
                </p>
              </span>
              <span className="hidden sm:flex">
                <p className="text-white">
                  Je suis allé en Licence Mathématique et Informatique à l&apos;Université Paris-Cité (anciennement Paris Descartes)<br />
                  Par la suite, j&apos;ai voulu découvrir une branche de l&apos;informatique :
                  <strong className="flex items-center text-cyan-200">La cybersécurité.&nbsp;<MdOutlineSecurity /></strong>
                  J&apos;ai donc suivi le master Informatique spécialité <strong className="text-cyan-200">Réseaux</strong> à Sorbonne Université. <br />
                  Mais réalisant que cela m&apos;intéressait pas plus, je suis retourné avec mon premier coup de foudre : <strong className="flex items-center text-yellow-300">Le développement.&nbsp;<FaCode /></strong>
                </p>
              </span>
              <p className="text-white">
                Actuellement chez Acensi.
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
              <FaLinkedin className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="https://www.linkedin.com/in/jean-de-vera-ba1885199/" target="_blank" rel="noopener noreferrer">Jean DE VERA</Link>
            </div>
          </div>
        </div>
      </section>
    )
}