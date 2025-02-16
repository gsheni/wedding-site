import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavbarLink } from "./NavbarLink";

export const Navbar = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:flex sm:space-x-8">
                  <NavbarLink text="Our Wedding" route="/" />
                  <NavbarLink
                    text="Guest Accomodations"
                    route="/guest-accomodations"
                  />
                  <NavbarLink text="Details" route="/details" />
                  <NavbarLink text="Photography" route="/photos" />
                  <NavbarLink text="Registry" route="/registry" />
                </div>
                <div className="sm:hidden font-cormorant-garamond text-[#a0bbd3] m-auto">
                  <span className="text-3xl">M</span>
                  <span className="text-2xl">&</span>
                  <span className="text-3xl">G</span>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col pt-2 pb-4 space-y-1">
              <Disclosure.Button>
                <NavbarLink text="Our Wedding" route="/" />
              </Disclosure.Button>
              <Disclosure.Button>
                <NavbarLink
                  text="Guest Accomodations"
                  route="/guest-accomodations"
                />
              </Disclosure.Button>
              <Disclosure.Button>
                <NavbarLink text="Details" route="/details" />
              </Disclosure.Button>
              <Disclosure.Button>
                <NavbarLink text="Photography" route="/photos" />
              </Disclosure.Button>
              <Disclosure.Button>
                <NavbarLink text="Registry" route="/registry" />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
