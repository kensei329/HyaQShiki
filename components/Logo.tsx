export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* グラフィックアイコン */}
      <div className="mb-3">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-16 md:w-32 md:h-20"
        >
          {/* Left Side: Document with Circuit Board */}
          <path
            d="M10 15C10 12.7909 11.7909 11 14 11H50C51.1046 11 52 11.8954 52 13V45C52 46.1046 51.1046 47 50 47H14C11.7909 47 10 45.2091 10 43V15Z"
            fill="#0B2545"
          />
          {/* Folded corner */}
          <path d="M50 11L50 25L64 25L50 11Z" fill="#E6A915" />
          
          {/* Circuit board lines in document */}
          <line x1="16" y1="18" x2="44" y2="18" stroke="#E6A915" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="22" x2="40" y2="22" stroke="#E6A915" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="26" x2="44" y2="26" stroke="#E6A915" strokeWidth="1.2" strokeLinecap="round" />
          
          {/* Circuit pattern */}
          <rect x="16" y="30" width="4" height="4" fill="#0B2545" />
          <rect x="22" y="30" width="4" height="4" fill="#E6A915" />
          <rect x="28" y="30" width="4" height="4" fill="#0B2545" />
          <line x1="20" y1="32" x2="22" y2="32" stroke="#E6A915" strokeWidth="0.8" />
          <line x1="26" y1="32" x2="28" y2="32" stroke="#0B2545" strokeWidth="0.8" />
          
          {/* Dissipating elements (left edge) */}
          <circle cx="12" cy="30" r="1.5" fill="#E6A915" />
          <circle cx="12" cy="36" r="1.5" fill="#0B2545" />
          <rect x="8" y="30" width="2" height="2" fill="#E6A915" />
          <rect x="8" y="34" width="2" height="2" fill="#0B2545" />
          
          {/* Right Side: Gear */}
          <g transform="translate(60, 20)">
            {/* Gear outer shape */}
            <path
              d="M20 8C20 5.79086 21.7909 4 24 4H40C42.2091 4 44 5.79086 44 8V24C44 26.2091 42.2091 28 40 28H24C21.7909 28 20 26.2091 20 24V8Z"
              fill="#E6A915"
            />
            
            {/* Gear teeth */}
            <path
              d="M24 8L25.5 5L26.5 5L28 8L30 8L31.5 11L32.5 11L31 14L33 14L34.5 17L35.5 17L34 20L32 20L30.5 23L29.5 23L28 20L26 20L24.5 23L23.5 23L22 20L20 20L18.5 17L19.5 17L21 14L19 14L17.5 11L18.5 11L20 8L24 8Z"
              fill="#E6A915"
              stroke="#0B2545"
              strokeWidth="0.5"
            />
            
            {/* Gear center hub */}
            <circle cx="27" cy="14" r="6" fill="#0B2545" />
            <circle cx="27" cy="14" r="4" fill="#E6A915" />
            
            {/* Gear spokes */}
            <line x1="27" y1="8" x2="27" y2="10" stroke="#E6A915" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="27" y1="18" x2="27" y2="20" stroke="#E6A915" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21" y1="14" x2="23" y2="14" stroke="#E6A915" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="31" y1="14" x2="33" y2="14" stroke="#E6A915" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
      
      {/* テキスト */}
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold">
          <span className="text-navy">Hya</span>
          <span className="text-accent">Q</span>
          <span className="text-navy">Shiki</span>
        </div>
        <div className="text-xs md:text-sm text-navy mt-1 font-medium">
          FAX・紙整理のAI
        </div>
      </div>
    </div>
  );
}

