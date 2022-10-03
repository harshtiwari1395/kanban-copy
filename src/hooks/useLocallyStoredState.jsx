import {useState, useEffect} from "react";

const useLocallyStoredState=(defaultValue, key)=> {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      console.log("stickyValue", key, stickyValue);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  export default useLocallyStoredState;