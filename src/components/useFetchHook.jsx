import { useEffect, useState } from "react";
import axios from "axios";

const useFetchHook = (start, count, url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: url,
      params: { start: start, count: count },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        // setData((prevData) => {
        //   return [...prevData, ...res.data.map((item) => item)];
        // });
        setData(data.concat(res.data));
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
  }, []);

  return { loading, error, data, hasMore };
};

export default useFetchHook;
