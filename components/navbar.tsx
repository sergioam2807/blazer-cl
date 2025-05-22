import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
  NavbarBrand,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar className="bg-yellow-400" maxWidth="xl" position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 text-black"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Blazer</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex sm:basis-full flex justify-center items-center"
        justify="center"
      >
        {siteConfig.navItems.map((item) =>
          item.subItems ? (
            <li key={item.href} className="relative group px-3 py-2">
              <div className="inline-block">
                <button className="font-bold text-black bg-transparent hover:text-gray-600">
                  {item.label}
                </button>
              </div>

              <div className="absolute left-0 mt-2 pt-0 hidden group-hover:block bg-black/90 shadow-lg rounded-br-lg rounded-bl-lg rounded-tr-lg z-50 min-w-[400px]">
                <ul className="py-2">
                  {item.subItems.map((sub) => (
                    <li key={sub.href}>
                      <NextLink
                        className="block px-4 py-2 text-gray-100 hover:bg-gray-900 font-semibold"
                        href={sub.href}
                      >
                        {sub.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <NavbarItem key={item.href}>
              <NextLink
                className="font-bold text-black hover:text-gray-600"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
