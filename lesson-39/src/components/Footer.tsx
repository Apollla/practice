import { useTheme } from "../hooks/useTheme";

export const Footer = () => {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();
  return (
    <footer className={`border-t ${theme === "light" ? "bg-white text-black border-gray-700" : "bg-gray-800 text-white border-white"}`}>
      <div className="max-w-[1200px] mx-auto px-4 flex justify-center items-center py-6">
        <p className= {`text-600 text-sm text-center`}>
          Copyright &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};