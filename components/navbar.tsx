import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="p-4 shadow-md"
      style={{background: '#50C878', border: '4px solid #FFD700' }}
    >
      <NavbarContent
        className="basis-full flex justify-center"
        justify="center"
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-center items-center gap-1 text-white"
            href="/"
          >
            <p className="font-bold text-3xl md:text-4xl text-inherit">
              Shennoy | Kaitlyn 
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
