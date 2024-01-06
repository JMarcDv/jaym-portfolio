import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function CardResume (props: { text1: string; text2: string; text3: string; }) {
  const { text1, text2, text3 } = props;
    return (
      <Card className="flex flex-row py-4 w-full">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center w-2/3 ">
          <p className="text-tiny uppercase font-bold">{text1}</p>
          <small className="text-default-500">{text2}</small>
          <h4 className="font-bold text-large">{text3}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://media.licdn.com/dms/image/D4E03AQEYz1hT9ZDhmA/profile-displayphoto-shrink_800_800/0/1687792771595?e=2147483647&v=beta&t=tG_wihoASsoljd70Y8GTOfWCN8xkEL35MMuuEIYZKF8"
            width={270}
          />
        </CardBody>
      </Card> 
    )
}