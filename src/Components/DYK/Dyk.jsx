import React, { useEffect, useState } from "react";
import axios from "axios";

const DoYouKnow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.codespade.com:4517/codespade/api/bahasa-daerah");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-[40px] lg:text-[60px] font-raja text-burgundy">Do You Know?</h1>
        <div className="rounded-xl lg:w-[1000px] w-[500px] bg-taupe p-4">
          {data.length > 0 && (
            <div>
              {data.slice(0, 1).map((item, index) => (
                <div key={index}>
                  <p className="font-raja text-burgundy lg:text-[30px]">Bahasa {item.bahasa}</p>
                  {item.listProvinsi && item.listProvinsi.length > 0 && (
                    <p className="font-raja text-burgundy lg:text-[20px]">
                      {item.listProvinsi[0].provinsi}: {item.listProvinsi[0].deskripsi}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoYouKnow;
