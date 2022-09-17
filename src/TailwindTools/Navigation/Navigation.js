import React from "react";
import { Disclosure } from "@headlessui/react";

import Logo from "../Logo";
import NavItems from "./NavItems";
import UserProfile from "../UserProfile/UserProfile";
import BurgerMenu from "./ResponsiveMenu/BurgerMenu";
import MenuItems from "./ResponsiveMenu/MenuItems";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Add Motor", href: "/add-motor", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Logo />
                <NavItems navigation={navigation} classNames={classNames} />
              </div>
              <UserProfile
                user={user}
                userNavigation={userNavigation}
                classNames={classNames}
              />
              <BurgerMenu open={open} />
            </div>
          </div>
          <MenuItems
            navigation={navigation}
            classNames={classNames}
            user={user}
            userNavigation={userNavigation}
          />
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
