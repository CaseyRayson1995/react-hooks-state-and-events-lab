import React from 'react';

function Header({ isDarkMode, onDarkModeClick }) {
    return (<header>
        <h2>Shopster</h2>
        <button onclick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    );
};
export default Header