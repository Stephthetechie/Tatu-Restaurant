import { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <NavContext.Provider value={{ isOpen, toggleMenu }}>
            {children}
        </NavContext.Provider>
    );
};
