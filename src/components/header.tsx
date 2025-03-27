import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="w-full border-b sticky top-0 z-55 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img
            src={`${isDark ? "/light_logo.png" : "/dark_logo.png"}`}
            width={"100"}
            alt="LOGO"
          />
        </div>
        <div
          className={`transition-transform duration-500 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* search */}
          {isDark ? (
            <Sun
              onClick={() => setTheme("light")}
              className="h-6 w-6 text-yellow-500 cursor-pointer "
            />
          ) : (
            <Moon
              onClick={() => setTheme("dark")}
              className="h-6 w-6 text-blue-500 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
