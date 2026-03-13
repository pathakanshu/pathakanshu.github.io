import {useState, useEffect} from 'react';

const ToggleComponent = () => {
    let [isDark] = useState(false);

    const HandleToggleChange = () => {
        if(isDark) {
            document.documentElement.removeAttribute("data-theme");
            isDark = false;
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            isDark = true;
        }
    };

    return (
        <label className = "mode-toggle">
            <input 
                type = "checkbox" 
                id = "dark-mode-toggle" 
                onChange = {HandleToggleChange}
            />
            <span className = "slider"></span>
        </label>
    )
}

export default ToggleComponent;