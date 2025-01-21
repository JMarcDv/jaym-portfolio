import { Card, CardBody, CardHeader, Image } from "@heroui/react";

export default function CardResume (props: { type: string; title: string; where: string; imgSrc: string }) {
  const { type, title, where, imgSrc } = props;
    return (
      <Card className="flex flex-row py-4 w-full h-32 hover:animate-shake hover:animate-duration-[2000ms]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-center w-2/3 ">
          <p className="text-tiny uppercase font-bold">{type}</p>
          <small className="text-default-500">{title}</small>
          <h4 className="font-bold text-large">{where}</h4>
        </CardHeader>
        <CardBody className="py-2 flex flex-row justify-center content-center overflow-hidden">
          <Image
            isZoomed
            alt="Card background"
            className="object-contain rounded-xl"
            src={imgSrc}
            width={90}
            height={90}
          />
        </CardBody>
      </Card>
    )
}