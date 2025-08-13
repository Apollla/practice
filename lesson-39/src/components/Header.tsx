type Props = {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onUserClick?: () => void;
  isMenuOpen?: boolean;
};

export const Header = ({ onMenuClick, onSearchClick, onUserClick, isMenuOpen}: Props) => {

  return (
    <header className="relative flex h-16 px-4 justify-between items-center bg-blue-600 text-white">
      <button 
        onClick={onMenuClick}
        className="p-2 rounded hover:bg-blue-500 transition" 
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M18 6L6 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect y="4" width="24" height="2" fill="white" />
            <rect y="11" width="24" height="2" fill="white" />
            <rect y="18" width="24" height="2" fill="white" />
          </svg>
        )}
      </button>

      <div className="flex gap-3 items-center">
        <button onClick={onSearchClick} className="p-2 rounded hover:bg-blue-500 transition" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="2" fill="none"/>
            <line x1="15" y1="15" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button onClick={onUserClick} className="p-2 rounded hover:bg-blue-500 transition" type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
            <path
              d="M4 20c0-4 8-4 8-4s8 0 8 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};