import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading };
};
