import React, { useCallback, useState, useContext } from "react";
import { GlobalContext } from '@/hooks/useContext'

const useFetch = () => {
  const {
    setData, data,
    setError, error,
    setStatus, status
  } = useContext(GlobalContext)

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setStatus(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('error');
    } finally {
      setData(json);
      // setStatus(false);
      setStatus(false);
      setTimeout(() => {
        console.info(`FETCH DONE (status: ${response.status})`)
      }, 500)
      return { response, json };
    }
  }, []);
  return { data, error, status, request };
};

export default useFetch;