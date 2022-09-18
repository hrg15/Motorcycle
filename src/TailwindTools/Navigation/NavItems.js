import { NavLink } from "react-router-dom";

const NavItems = ({ classNames, navigation }) => {
  const activClass = (isActive) => {
    return isActive
      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
  };
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => activClass(isActive)}
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
