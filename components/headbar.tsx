'use client';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import React from 'react';

export default function HeadBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ['Accueil', 'Expériences', 'Projets']
  const itemLink = (item: string) => {
    if (item === 'Accueil') return '#home'
    if (item === 'Expériences') return '#resume'
    if (item === 'Projets') return '#projects'
  }
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered shouldHideOnScroll className='bg-violet-950'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
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
      </NavbarContent>
        <NavbarContent className="md:flex hidden gap-4" justify='center'>
          <NavbarItem>
            <Link className='text-white' href="#home" aria-current="page">
              Accueil
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='text-white' href="#resume" aria-current="page">
              Expériences
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='text-white' href="#projects" aria-current="page">
              Projets
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={itemLink(item)}
                size="lg"
                onClick={() => {setIsMenuOpen(false)}}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
    </Navbar>
  );
}
