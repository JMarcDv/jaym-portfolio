'use client'
import { Image } from "@nextui-org/react"

export default function First() {
    return (
      <section id="home" className="flex items-center h-screen relative justify-center w-full bg-cover bg-center bg-gradient-to-b from-violet-900 to-violet-950">
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <div className=" m-5">
              <Image
                isZoomed
                width={300}
                alt="NextUI hero Image"
                src="/assets/logos/profilePic.jpeg"
              />
            </div>
            <div className=" m-5">
              Hello ! I&apos;m Jean, and I&apos;m a full stack developer :).<br />
              I&apos;m 24 years old and I live near Paris.<br />
              I did some React.Js, Node.js, Next.Js, React Native and PHP but also some C, Java, and Python. <br />
              I&apos;m currently working with Acensi
            </div>
          </div>
          {/* <div className='flex flex-col-reverse items-center'>
            Resume
            <Image height={50} width={50} src='/arrow_down.png' alt='Down arrow icon'/>
          </div> */}
        </div>
      </section>
    )
}