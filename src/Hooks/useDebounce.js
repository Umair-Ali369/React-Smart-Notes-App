import { useEffect } from "react";

function debounceSave (key, value, onSave ,delay = 1000) {

    useEffect(()=> {


        if (value === '') return;
        const t = setTimeout(()=> {
            
            localStorage.setItem(key, value);
             
            if (onSave) onSave();
            
            },delay)
        return () => clearTimeout(t)

    },[key, value, delay, onSave])

}

export default debounceSave;