import React, { useEffect, useState } from "react";

const provinces = [
    { id: "Aceh", name: "Provinsi Aceh" },
    { id: "Bali", name: "Provinsi Bali" },
    { id: "BangkaBelitung", name: "Provinsi Bangka Belitung" },
    { id: "Banten", name: "Provinsi Banten" },
    { id: "Bengkulu", name: "Provinsi Bengkulu" },
    { id: "DIYogyakarta", name: "Provinsi DI Yogyakarta" },
    { id: "DKIJakarta", name: "Provinsi DKI Jakarta" },
    { id: "Gorontalo", name: "Provinsi Gorontalo" },
    { id: "Jambi", name: "Provinsi Jambi" },
    { id: "JawaBarat", name: "Provinsi Jawa Barat" },
    { id: "JawaTengah", name: "Provinsi Jawa Tengah" },
    { id: "JawaTimur", name: "Provinsi Jawa Timur" },
    { id: "KalimantanBarat", name: "Provinsi Kalimantan Barat" },
    { id: "KalimantanSelatan", name: "Provinsi Kalimantan Selatan" },
    { id: "KalimantanTengah", name: "Provinsi Kalimantan Tengah" },
    { id: "KalimantanTimur", name: "Provinsi Kalimantan Timur" },
    { id: "KalimantanUtara", name: "Provinsi Kalimantan Utara" },
    { id: "KepulauanRiau", name: "Provinsi Kepulauan Riau" },
    { id: "Lampung", name: "Provinsi Lampung" },
    { id: "Maluku", name: "Provinsi Maluku" },
    { id: "MalukuUtara", name: "Provinsi Maluku Utara" },
    { id: "NusaTenggaraBarat", name: "Provinsi Nusa Tenggara Barat" },
    { id: "NusaTenggaraTimur", name: "Provinsi Nusa Tenggara Timur" },
    { id: "Papua", name: "Provinsi Papua" },
    { id: "PapuaBarat", name: "Provinsi Papua Barat" },
    { id: "Riau", name: "Provinsi Riau" },
    { id: "SulawesiBarat", name: "Provinsi Sulawesi Barat" },
    { id: "SulawesiSelatan", name: "Provinsi Sulawesi Selatan" },
    { id: "SulawesiTengah", name: "Provinsi Sulawesi Tengah" },
    { id: "SulawesiTenggara", name: "Provinsi Sulawesi Tenggara" },
    { id: "SulawesiUtara", name: "Provinsi Sulawesi Utara" },
    { id: "SumateraBarat", name: "Provinsi Sumatera Barat" },
    { id: "SumateraSelatan", name: "Provinsi Sumatera Selatan" },
    { id: "SumateraUtara", name: "Provinsi Sumatera Utara" },
    { id: "Indonesia", name: "Provinsi Indonesia" }
  ];

const Weather = () => {
  const [province, setProvince] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const randomProvince = provinces[Math.floor(Math.random() * provinces.length)];
    setProvince(randomProvince.id);
  }, []);

  useEffect(() => {
    if (province) {
      fetch(`https://weather-api-tau-six.vercel.app/weather/${province}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Province not found");
          }
          return response.json();
        })
        .then((data) => {
          const forecast = data.data.forecast.area[0];
          const temperatureParam = forecast.parameter.find(param => param.description.toLowerCase().includes("temperature"));
          const humidityParam = forecast.parameter.find(param => param.description.toLowerCase().includes("humidity"));

          const temperature = temperatureParam ? temperatureParam.timerange[0].value[0].text : "N/A";
          const humidity = humidityParam ? humidityParam.timerange[0].value[0].text : "N/A";
          const timestamp = data.data.forecast.timestamp;
          
  
          const year = timestamp.substring(0, 4);
          const month = timestamp.substring(4, 6);
          const day = timestamp.substring(6, 8);

          setWeatherData({
            domain: forecast.domain,
            temperature,
            humidity,
            timestamp: `${year}-${month}-${day}`,
          });
          setError("");
        })
        .catch((error) => {
          setWeatherData(null);
          setError(error.message);
        });
    }
  }, [province]);

  return (
    <div className="flex justify-center flex-col">
      <h2 className="text-burgundy font-raja lg:text-5xl text-2xl text-center">Weather Information</h2>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {weatherData && (
        <div className="flex justify-center">
        <div className="weather-info mt-2 text-center text-ivory rounded-[30px] bg-burgundy lg:w-[300px] p-4">
          <p><strong>Province:</strong> {weatherData.domain}</p>
          <p><strong>Temperature:</strong> {weatherData.temperature} °C</p>
          <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
          <p><strong>Date:</strong> {weatherData.timestamp}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
