import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useState } from "react";
import { SidebarMenu } from "./components/common/SidebarMenu";
import { ThemeProvider } from "./components/contexts/ThemeContext";
import { SearchProvider } from "./components/contexts/SearchContext";


export const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <ThemeProvider>
      <SearchProvider>
    <div className="flex max-w-[1200px] mx-auto flex-col min-h-screen w-full relative">
      
      <Header
        onMenuClick={toggleSidebar}
        isMenuOpen={isSidebarOpen}
        onUserClick={() => console.log('User')}
      />
      <SidebarMenu isOpen={isSidebarOpen}/> 
    
      <Main />
      <Footer/>
    </div>
    </SearchProvider>
    </ThemeProvider>
  );
};