import React, { createContext, useContext, useReducer } from 'react'
//reateContext,useContext,useReducer是api的東西



//把數據層準備好
export const StateContext = createContext()



//這個高階組件, 本質上有涵蓋需要的應用程式//
export const StateProvider = ({ reducer, initialState, children })
  => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>

    {children}

  </StateContext.Provider>

}

export const useStateValue = () => useContext(StateContext)