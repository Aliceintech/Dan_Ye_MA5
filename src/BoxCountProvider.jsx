import { createContext, useContext, useEffect, useState } from "react";

const BoxCountContext = createContext();
export const useBoxCountContext = () => useContext(BoxCountContext);

// eslint-disable-next-line react/prop-types
const  BoxCountProvider = ({ children }) => {
    const [blackState, setBlackState] = useState([false, false, false, false]);
    const [countState, setCountState] = useState(0);

    useEffect(() => {
        const count = blackState.filter(isOn => isOn).length;
        setCountState(count);
    }, [blackState]);

    const BoxOnStates = (idx) => {
        const newBoxStates = [...blackState];
        newBoxStates[idx] = !newBoxStates[idx];
        setBlackState(newBoxStates);
    };

    return <BoxCountContext.Provider value = {{blackState, BoxOnStates, countState}}>
        {children}
    </BoxCountContext.Provider>
    
};

export default BoxCountProvider;