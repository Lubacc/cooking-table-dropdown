import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  async function getDataFromApi(url) {
    try {
      await axios.get(url).then((res) =>
        setData({
          data: res.data,
        })
      );
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDataFromApi(url);
  }, [url]);

  return data;
};
