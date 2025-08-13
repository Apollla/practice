import { RegistrationController } from "./common/registration/RegistrationController";
import { useTheme } from "../hooks/useTheme";
import { SignInController } from "./common/signin/SignInController";

export const Main = () => {
  const { theme } = useTheme();
  
  return (
    <main className={`flex-1 justify-center items-center ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
   <RegistrationController />
    </main>
  );
};