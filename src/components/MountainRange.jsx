import React from 'react';

function MountainRange() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-64 z-0 pointer-events-none">
      <svg
        viewBox="0 0 1200 200"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
        
        {/* SF Skyline - Behind NYC (lower opacity) */}
        {/* Transamerica Pyramid */}
        <polygon points="50,200 70,60 90,200" fill="url(#cityGradient)" opacity="0.3" />
        
        {/* Salesforce Tower */}
        <rect x="100" y="50" width="25" height="150" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="105" y="30" width="15" height="20" fill="url(#cityGradient)" opacity="0.3" />
        
        {/* Coit Tower */}
        <rect x="150" y="80" width="8" height="120" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="148" y="60" width="12" height="20" fill="url(#cityGradient)" opacity="0.3" />
        
        {/* Bay Bridge */}
        <rect x="200" y="180" width="800" height="4" fill="url(#cityGradient)" opacity="0.4" />
        <rect x="200" y="175" width="800" height="2" fill="url(#cityGradient)" opacity="0.4" />
        <rect x="200" y="170" width="800" height="2" fill="url(#cityGradient)" opacity="0.4" />
        
        {/* Bridge towers */}
        <rect x="300" y="160" width="6" height="20" fill="url(#cityGradient)" opacity="0.4" />
        <rect x="500" y="160" width="6" height="20" fill="url(#cityGradient)" opacity="0.4" />
        <rect x="700" y="160" width="6" height="20" fill="url(#cityGradient)" opacity="0.4" />
        <rect x="900" y="160" width="6" height="20" fill="url(#cityGradient)" opacity="0.4" />
        
        {/* SF Buildings */}
        <rect x="250" y="100" width="20" height="100" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="290" y="110" width="18" height="90" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="330" y="95" width="22" height="105" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="370" y="105" width="19" height="95" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="410" y="90" width="24" height="110" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="450" y="100" width="21" height="100" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="490" y="85" width="23" height="115" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="530" y="95" width="20" height="105" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="570" y="110" width="18" height="90" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="610" y="100" width="22" height="100" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="650" y="85" width="24" height="115" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="690" y="95" width="21" height="105" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="730" y="105" width="19" height="95" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="770" y="90" width="23" height="110" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="810" y="100" width="20" height="100" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="850" y="85" width="24" height="115" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="890" y="95" width="21" height="105" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="930" y="105" width="19" height="95" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="970" y="90" width="23" height="110" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="1010" y="100" width="20" height="100" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="1050" y="85" width="24" height="115" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="1090" y="95" width="21" height="105" fill="url(#cityGradient)" opacity="0.3" />
        <rect x="1130" y="105" width="19" height="95" fill="url(#cityGradient)" opacity="0.3" />
        
        {/* NYC Skyline - Multiple buildings with varying heights */}
        {/* Empire State Building */}
        <rect x="50" y="80" width="40" height="120" fill="url(#cityGradient)" opacity="0.8" />
        <rect x="60" y="60" width="20" height="20" fill="url(#cityGradient)" opacity="0.8" />
        <rect x="65" y="40" width="10" height="20" fill="url(#cityGradient)" opacity="0.8" />
        
        {/* Chrysler Building */}
        <rect x="120" y="100" width="35" height="100" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="125" y="80" width="25" height="20" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="130" y="60" width="15" height="20" fill="url(#cityGradient)" opacity="0.7" />
        
        {/* One World Trade Center */}
        <rect x="200" y="40" width="30" height="160" fill="url(#cityGradient)" opacity="0.9" />
        <rect x="205" y="20" width="20" height="20" fill="url(#cityGradient)" opacity="0.9" />
        
        {/* Rockefeller Center */}
        <rect x="270" y="90" width="40" height="110" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="280" y="70" width="20" height="20" fill="url(#cityGradient)" opacity="0.6" />
        
        {/* Flatiron Building */}
        <polygon points="350,200 370,120 390,200" fill="url(#cityGradient)" opacity="0.7" />
        
        {/* Various other buildings */}
        <rect x="420" y="110" width="25" height="90" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="470" y="95" width="30" height="105" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="530" y="85" width="35" height="115" fill="url(#cityGradient)" opacity="0.8" />
        <rect x="590" y="100" width="28" height="100" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="640" y="90" width="32" height="110" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="700" y="105" width="26" height="95" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="760" y="80" width="38" height="120" fill="url(#cityGradient)" opacity="0.8" />
        <rect x="820" y="95" width="30" height="105" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="880" y="110" width="25" height="90" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="940" y="85" width="35" height="115" fill="url(#cityGradient)" opacity="0.8" />
        <rect x="1000" y="100" width="28" height="100" fill="url(#cityGradient)" opacity="0.7" />
        <rect x="1060" y="90" width="32" height="110" fill="url(#cityGradient)" opacity="0.6" />
        <rect x="1120" y="105" width="26" height="95" fill="url(#cityGradient)" opacity="0.7" />
        
        {/* Windows on buildings */}
        <rect x="55" y="90" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="65" y="90" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="75" y="90" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="55" y="105" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="65" y="105" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="75" y="105" width="5" height="8" fill="#1e293b" opacity="0.4" />
        
        <rect x="125" y="110" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="135" y="110" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="145" y="110" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="125" y="125" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="135" y="125" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="145" y="125" width="5" height="8" fill="#1e293b" opacity="0.4" />
        
        <rect x="205" y="50" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="215" y="50" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="225" y="50" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="205" y="65" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="215" y="65" width="5" height="8" fill="#1e293b" opacity="0.4" />
        <rect x="225" y="65" width="5" height="8" fill="#1e293b" opacity="0.4" />
        
        {/* More windows on other buildings */}
        <rect x="425" y="120" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="435" y="120" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="425" y="135" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="435" y="135" width="4" height="6" fill="#1e293b" opacity="0.3" />
        
        <rect x="475" y="105" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="485" y="105" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="495" y="105" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="475" y="120" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="485" y="120" width="4" height="6" fill="#1e293b" opacity="0.3" />
        <rect x="495" y="120" width="4" height="6" fill="#1e293b" opacity="0.3" />
      </svg>
    </div>
  );
}

export default MountainRange; 