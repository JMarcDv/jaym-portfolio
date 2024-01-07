'use client';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';

export default function HeadBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Avatar
          src="/assets/logos/profilePic.jpeg"
          isBordered
          name="JDV"
          className="m-3"
          radius="md"
        />
        <p className="font-bold text-inherit">Jean DE VERA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home" aria-current="page">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#resume" aria-current="page">
            Expériences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects" aria-current="page">
            Projets
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
