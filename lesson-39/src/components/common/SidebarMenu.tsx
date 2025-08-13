import { useTheme } from "../../hooks/useTheme";

type SidebarMenuProps = {
  isOpen: boolean;
};

export const SidebarMenu = ({ isOpen }: SidebarMenuProps) => {
  const { theme, toggleTheme } = useTheme();
 
  return (
    <div className={`fixed top-16 left-[calc(50%-600px)] w-64 z-30 shadow-md border-r transition-all duration-300 ease-in-out overflow-hidden ${theme === "light" ? "bg-white text-black  border-gray-200" : "bg-gray-700 text-white  border-gray-700"} ${isOpen ? "max-h-[50vh]" : "max-h-0"}`}>
      <div className="p-4 flex flex-col gap-4 h-[50vh] overflow-y-auto">
        <div className="text-blue-700 font-medium">Home</div>
        
        <div className="flex flex-col gap-2">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">3</div>
        </div>
        
        <div className="mt-auto flex flex-col gap-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition" onClick={toggleTheme}>
            Кнопка 1
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition" onClick={() => console.log('Кнопка 2')}>
            Кнопка 2
          </button>
        </div>
      </div>
    </div>
  );
};