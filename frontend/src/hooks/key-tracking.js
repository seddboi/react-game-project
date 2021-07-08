import {useEffect} from "react";

export default function CharacterMove(start) {
    useEffect( () => {
        window.addEventListener('keydown', start);
        
        return () => window.removeEventListener('keydown', start);
    }, [start])
};

