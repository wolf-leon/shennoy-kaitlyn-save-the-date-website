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
      style={{
        background: "linear-gradient(135deg, #228B22 50%, #32CD32 50%)", // Gradient background
      }}
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
            <p className="font-bold text-xl md:text-4xl text-inherit">
              Shennoy | Kaitlyn - Wedding RSVP
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
