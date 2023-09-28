'use client';
import { Image } from '@nextui-org/react';

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-600 to-blue-950">
        <div className=" m-5">
          <Image
            isZoomed
            width={300}
            alt="NextUI hero Image"
            src="https://media.licdn.com/dms/image/D4E03AQEYz1hT9ZDhmA/profile-displayphoto-shrink_800_800/0/1687792771595?e=2147483647&v=beta&t=tG_wihoASsoljd70Y8GTOfWCN8xkEL35MMuuEIYZKF8"
          />
        </div>
        <div className=" m-5">
          Hello ! I&apos;m Jean, and I&apos;m a full stack developer :)
        </div>
      </div>
    </main>
  );
}
