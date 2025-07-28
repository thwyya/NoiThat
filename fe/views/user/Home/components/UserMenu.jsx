import { useState } from "react";
import { FiUser } from "react-icons/fi";
import DropdownMenu from "@/components/DropdownMenu";
import Login from "../../../auth/Login";
import Register from "../../../auth/Register";


const UserMenu = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const switchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
    };
    
    return (
    <>
        <DropdownMenu
        trigger={<FiUser size={24} />}
        position="bottom-left"
        >
      <ul className="text-sm text-gray-700">
          <li
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </li>
          <li
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setIsRegisterOpen(true)}
          >
            Register
          </li>
        </ul>
      </DropdownMenu>

      {isLoginOpen && (
        <Login onClose={() => setIsLoginOpen(false)} onSwitch={switchToRegister} />
      )}
      {isRegisterOpen && (
        <Register onClose={() => setIsRegisterOpen(false)} onSwitch={switchToLogin} />
      )}
    </>
  );
};
export default UserMenu;