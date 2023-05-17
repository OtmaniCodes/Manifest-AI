import { createContext, useContext, useState } from "react";

const FirstLoadStateContext = createContext({
    isFirstLoad: true,
});

import React from 'react'

export function FirstLoadStateProvider({children}) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    
  return (
    <FirstLoadStateContext.Provider value={{isFirstLoad, setIsFirstLoad}}>
        {children}
    </FirstLoadStateContext.Provider>
  )
}


export const useFirstLoadState = () => useContext(FirstLoadStateContext);