import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedVaLue, setStoredValue] = useState(()=>{
        if(typeof window === 'undefined'){
            return initialValue;
        }
        
        try {
            // Get Lcoal storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue;
        }
  
    })  


    const setValue = (value) => {
        try {
            const valueToStore = 
                value instanceof Function ? value(storedVaLue) : value;
    
                setStoredValue(valueToStore);
                // save to local storage
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
        } catch (error) {
            console.log(error)
        }
    }
    
    return [storedVaLue, setValue]


}




export default useLocalStorage