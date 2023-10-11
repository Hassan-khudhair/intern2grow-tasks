import { useEffect, useState } from "react";
import {marked} from 'marked'


const useLocalstorage = (coding , compiledCode) =>{
    const [code, setCode] = useState(coding);
    const [compiled, setCompiled] = useState(compiledCode);

    const handleChange = (e) => {
        setCode(e.target.value)
        setCompiled(marked.parse(e.target.value))
    }

    
    return {code, compiled};

}

export default useLocalstorage;



