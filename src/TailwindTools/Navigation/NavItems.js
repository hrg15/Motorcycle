import { NavLink } from "react-router-dom";

const NavItems = ({ classNames, navigation }) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
