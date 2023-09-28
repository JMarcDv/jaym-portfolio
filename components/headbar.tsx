'use client';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';

export default function HeadBar() {
  return (
    <Navbar shouldHideOnScroll isBordered>
      <NavbarBrand>
        <Avatar
          src="https://media.licdn.com/dms/image/D4E03AQEYz1hT9ZDhmA/profile-displayphoto-shrink_800_800/0/1687792771595?e=2147483647&v=beta&t=tG_wihoASsoljd70Y8GTOfWCN8xkEL35MMuuEIYZKF8"
          isBordered
          name="JDV"
          className="m-3"
          radius="md"
        />
        <p className="font-bold text-inherit">Jean DE VERA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/resume" aria-current="page">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end"></NavbarContent> */}
    </Navbar>
  );
}
