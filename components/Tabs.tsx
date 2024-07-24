import React from 'react';

interface TabsProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

function Tabs({ active, selectTab, children }: TabsProps) {
    // Define the base class for tab button
    const baseClass = "px-4 py-2 text-sm font-medium rounded-lg mr-4 transition-colors duration-300";

    // Define the class for active tab with gradient background
    const activeClass = "bg-gradient-to-br from-[#F1563c] via-purple-500 to-[#00b3c1] text-white";

    // Define the class for inactive tab
    const inactiveClass = "bg-transparent text-[#ADB7BE] border-transparent hover:bg-slate-200";

    // Combine the classes based on whether the tab is active
    const buttonClass = active ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;

    return (
        <button
            onClick={selectTab}
            className={buttonClass}
        >
            {children}
        </button>
    );
}

export default Tabs;
