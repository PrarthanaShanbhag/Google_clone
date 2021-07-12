import React, { createContext, useContext, useReducer } from "react"


/*
  -Context provides a way to share values like these between components 
   without having to explicitly pass a prop through every level of the tree.
   Context is designed to share data that can be considered “global” for a
   tree of React components
  -Every Context object comes with a Provider React component that allows consuming 
   components to subscribe to context changes.The Provider component accepts a value
   prop to be passed to consuming components that are descendants of this Provider. 
   One Provider can be connected to many consumers.
  -A React component that subscribes to context changes. Using this component lets you 
   subscribe to a context within a function component.Requires a function as a child.
   The function receives the current context value and returns a React node. The value
   argument passed to the function will be equal to the value prop of the closest Provider 
   for this context above in the tree. 
*/

//preparing data layer

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children
}) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
      {children}
    </StateContext.Provider>
    //initialState and reducer are taken from reducer.js and 
    //children refer to apps component which is child of stateprovider in index.js
  )
};

export const useStateValue = () => {
  return(
    useContext(StateContext)
    )//hook which allow to pull the data from data layer
};











