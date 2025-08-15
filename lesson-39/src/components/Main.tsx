import { useTheme } from "../hooks/useTheme";
import { SearchPageController } from "./common/searchpage/SearchPageController";

export const Main = () => {
const { theme } = useTheme();
  
  return (
    <main className={`flex-1 justify-center items-center ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
  <SearchPageController />
    </main>
  );
};