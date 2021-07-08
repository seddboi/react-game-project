import {useEffect} from "react";

export default function KeyTracking(start) {
    useEffect( () => {
        window.addEventListener('keydown', start);
        
        return () => window.removeEventListener('keydown', start);
    }, [start])
};

