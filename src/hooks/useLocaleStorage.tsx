import React, { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initialValue?: any) => {
  const getValue = (): any => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [data, setData] = useState<any>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return { data, setData };
};
