import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";

export default function CardProject(props: { name: string; arobase: string; description: string; hashtags: Array<string>; srcAvatar: string }) {
  const { name, arobase, description, hashtags, srcAvatar } = props;
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
      <Card data-aos="zoom-in" className="sm:w-2/4 w-3/4 sm:h-44 h-48 m-7" isFooterBlurred>
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={srcAvatar} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
              <h5 className="text-small tracking-tight text-default-400">@{arobase}</h5>
            </div>
          </div>
          <Button
            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Locked" : "Lire plus"}
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
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">19</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">10.99K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    )
}