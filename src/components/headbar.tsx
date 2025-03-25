'use client';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  User
} from '@heroui/react';
import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function HeadBar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];
  const getImgPath = (currentLanguage: string) => {
    return `/assets/${currentLanguage}.webp`;
  };
  const imgLangPath = getImgPath(currentLang);
  const t = useTranslations('Headbar');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [t('home'), t('experiences'), t('projects')];
  const itemLink = (item: string) => {
    if (item === t('home')) return '#home';
    if (item === t('experiences')) return '#resume';
    if (item === t('projects')) return '#projects';
  };
  const changeLanguage = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|fr)/, '')}`;
    router.push(newPath);
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      className="bg-violet-950 bg-opacity-50"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />
      <NavbarBrand>
        <User
          name="Jean DE VERA"
          description={t('jobName')}
          avatarProps={{
            src: '/assets/logos/profilePic2.webp'
          }}
          className="text-white"
        />
      </NavbarBrand>
      <NavbarContent className="md:flex hidden gap-4" justify="center">
        <NavbarItem>
          <Link className="text-white" href="#home" aria-current="page">
            {t('home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#resume" aria-current="page">
            {t('experiences')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#projects" aria-current="page">
            {t('projects')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown>
          <DropdownTrigger>
            <Avatar radius="full" size="sm" src={imgLangPath} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="french"
              onPress={() => changeLanguage('fr')}
              startContent={<Avatar radius="full" size="sm" src={getImgPath('fr')} />}
            >
              {t('french')}
            </DropdownItem>
            <DropdownItem
              key="english"
              onPress={() => changeLanguage('en')}
              startContent={<Avatar radius="full" size="sm" src={getImgPath('en')} />}
            >
              {t('english')}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-screen"
              href={itemLink(item)}
              size="lg"
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
