type Tabs = {
  activeTab: string;
  onTabClick: (tab: string) => void;
};

export const TABS = ["All", "My favourite", "Popular"];

export const Tabs = ({ activeTab, onTabClick }: Tabs) => {
  return (
    <nav className="flex gap-8 border-b border-gray-300 mb-8">
      {TABS.map((tab) => (
        <button key={tab} onClick={() => onTabClick(tab)} className={`relative pb-2 font-medium ${activeTab === tab ? "text-gray-900" : "text-gray-500"}`}>
          <span>{tab}</span>
          <span className={`absolute left-0 right-0 bottom-0 h-[2px] bg-black ${activeTab === tab ? 'opacity-100' : 'opacity-0'}`} />
        </button>
      ))}
    </nav>
  );
};
