import { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import DropdownMenu from "@/components/DropdownMenu";
import Login from "../../../auth/Login";
import Register from "../../../auth/Register";


const UserMenu = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
        {!user ? (
        <button
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-2 px-2 py-1 transition"
        >
          <FiUser size={24} />
        </button>
      ) : (

        <DropdownMenu
          trigger={
            <div className="flex items-center gap-2 px-2 py-1  transition">
              <FiUser size={24} />
              <span className="text-sm font-medium">{user.name}</span>
            </div>
          }
        position="bottom-left"
            >
              
      <ul className="text-sm text-gray-700">
          <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Go to Edit Profile")}
            >
              Edit Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Go to Settings")}
            >
              Setting
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Go to Help & Support")}
            >
              Help & Support
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
              onClick={handleLogout}
            >
              Logout
            </li>
        </ul>
          </DropdownMenu>
      )}

      {isLoginOpen && (
        <Login onClose={() => setIsLoginOpen(false)} onSwitch={switchToRegister} onSuccess={handleLoginSuccess}/>
      )}
      {isRegisterOpen && (
        <Register onClose={() => setIsRegisterOpen(false)} onSwitch={switchToLogin} />
      )}
    </>
  );
};
export default UserMenu;