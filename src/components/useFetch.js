import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return data;
};
