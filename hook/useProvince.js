import {fetchData} from "../api/apiClient";
import {useEffect, useState} from "react";

export function useProvince() {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function loadProvinces() {
      try {
        setLoading(true);
        const data = await fetchData('/booking/provinces');
        setProvinces(data);
        setError(null);
        console.log(data)
      } catch (err) {
        setError('Có lỗi xảy ra khi tải danh sách tỉnh thành');
        console.error('Error loading provinces:', err);
      } finally {
        setLoading(false);
      }
    }

    loadProvinces();
  }, []);

  return { provinces, loading, error };
}