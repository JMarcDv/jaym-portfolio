import { Link } from '@nextui-org/react';
import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiLoveSong } from 'react-icons/gi';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-gradient-to-b from-blue-900 to-blue-800'>
            <div className='flex flex-col items-center justify-center pt-5'>
                <div className="flex sm:flex-row flex-col">
                    <div className="flex items-center m-5 gap-2">
                        <BiLogoGmail className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="mailto:jmdevera19@gmail.com">jmdevera19@gmail.com</Link>
                    </div>
                    <div className="flex items-center m-5 gap-2 ">
                        <FaGithub className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="https://github.com/JMarcDv">Jean Dv</Link>
                    </div>
                    <div className="flex items-center m-5 gap-2">
                        <FaLinkedin className="h-10 w-10 fill-white"/> <Link className="text-blue-300" href="https://www.linkedin.com/in/jean-de-vera-ba1885199/">Jean DE VERA</Link>
                    </div>
                </div>
                <div className='text-white p-1'>
                    © Jean DE VERA - {year}
                </div>
                <div className='p-2'>
                    <GiLoveSong className='fill-white'/>
                </div>
            </div>
        </footer>
    );
}