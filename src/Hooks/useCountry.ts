import axios from 'axios';
import React from 'react';

const useCountry = () => {
  /**
   * @setCountry - set country of user
   * @fetchData - function to fetch country data from API
   * @country - country data
   */
  const [country, setCountry] = React.useState<any[]>([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://countriesnow.space/api/v0.1/countries'
      );
      console.log('fetch===>', data);
      const countryData = Object.keys(data).map((key) => data[key]);
      setCountry(countryData[2].map((item: any) => item.country));
    } catch (err) {
      console.log('err====>', err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return {
    country
  };
};

export default useCountry;
