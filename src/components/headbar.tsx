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
  User,
} from "@heroui/react";
import React from 'react';
import {useTranslations} from 'next-intl';

export default function HeadBar() {
  const t = useTranslations('Headbar');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [t('home'), t('experiences'), t('projects')]
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
          <User
            name="Jean DE VERA"
            description={t('jobName')}
            avatarProps={{
              src:"/assets/logos/profilePic2.webp"
            }}
            className='text-white'
          />
        </NavbarBrand>
      </NavbarContent>
        <NavbarContent className="md:flex hidden gap-4" justify='center'>
          <NavbarItem>
            <Link className='text-white' href="#home" aria-current="page">
              {t('home')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='text-white' href="#resume" aria-current="page">
              {t('experiences')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className='text-white' href="#projects" aria-current="page">
              {t('projects')}
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-screen"
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
