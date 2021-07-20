import {useEffect} from "react";

function KeyTracking(start) {
    useEffect( () => {
        window.addEventListener('keydown', start);
        
        return () => window.removeEventListener('keydown', start);
    }, [start])
};

export default KeyTracking;