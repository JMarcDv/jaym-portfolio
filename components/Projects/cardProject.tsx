import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import ModalProject from "./modalProject";

export default function CardProject(props: { name: string; arobase: string; description: string; hashtags: Array<string>; srcAvatar: string; locked: boolean }) {
  const { name, arobase, description, hashtags, srcAvatar } = props;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedJsonData, setSelectedJsonData] = useState({
    description: "",
    details: "",
    technicalEnv: {
      languages: "",
      frameworks: "",
      tests: "",
      more: ""
    }
  });
  const loadJsonData = (fileName: string) => {
    import(`./data/${fileName}.json`)
      .then((module) => setSelectedJsonData(module.default))
      .catch((error) => console.error('Error loading JSON:', error));
  };
  const handleOpenModal = () => {
    loadJsonData(name);
    onOpen();
  }
    return (
      <>
        <Card data-aos="zoom-in" className="lg:w-2/4 w-3/4 lg:h-44 h-48 m-7">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src={srcAvatar} />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                <h5 className="text-small tracking-tight text-default-400">@{arobase}</h5>
              </div>
            </div>
            <Button
              color="primary"
              radius="full"
              size="sm"
              variant={"solid"}
              onPress={handleOpenModal}
            >
              {"Lire plus"}
            </Button>
          </CardHeader>
          <CardBody className="flex justify-between px-3 py-0 text-small text-default-400 overflow-hidden">
            <p>
            {description}
            </p>
            <span className="pt-2">
              {hashtags.map((hashtag) => `#${hashtag} `)}
              <span className="py-2" aria-label="computer" role="img">
                {' '}💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3 bg-white">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">19</p>
              <p className=" text-default-400 text-small">Abonnements</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">10.99K</p>
              <p className="text-default-400 text-small">Abonnés</p>
            </div>
          </CardFooter>
        </Card>
        <ModalProject isOpen={isOpen} onOpenChange={onOpenChange} name={name} company={arobase} data={selectedJsonData}/>
      </>
    )
}