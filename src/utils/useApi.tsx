import { useState, useCallback } from "react";

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

interface Props {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
  headers?: any;
}

interface State {
  data: any;
  err: any;
  isSuccessful: null | boolean;
}

const useApi = ({ url, method, data = null }: Props): [State, any] => {
  const [response, setResponse] = useState<State>({
    data: null,
    err: null,
    isSuccessful: null
  });

  /* when I try to invoke this hook from component I am not able to 
  mock success and error scenarios of axios*/
  const callToApi = useCallback(
    (reqData?: AxiosRequestConfig) => {
      setResponse({
        data: null,
        err: null,
        isSuccessful: null
      });

      axios({
        method,
        url,
        data,
        ...reqData
      })
        .then((res: AxiosResponse) => {
          setResponse({
            data: res.data || "Success",
            err: null,
            isSuccessful: true
          });
        })
        .catch((err: AxiosError) => {
          setResponse({
            data: null,
            err,
            isSuccessful: false
          });
        });
    },
    [url, method, data]
  );
  return [response, callToApi];
};

export default useApi;
