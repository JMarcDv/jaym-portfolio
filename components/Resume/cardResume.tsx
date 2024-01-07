import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function CardResume (props: { type: string; title: string; where: string; imgSrc: string }) {
  const { type, title, where, imgSrc } = props;
    return (
      <Card className="flex flex-row py-4 w-full h-32 hover:animate-shake hover:animate-duration-[2000ms]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center w-2/3 ">
          <p className="text-tiny uppercase font-bold">{type}</p>
          <small className="text-default-500">{title}</small>
          <h4 className="font-bold text-large">{where}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl"
            src={imgSrc}
            width={270}
          />
        </CardBody>
      </Card> 
    )
}