import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import FormManual from "../../components/FormManual";
import axios from "axios";

const InputManual = () => {
  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [selectProvince, setSelectProvince] = useState();
  const [selectCity, setSelectCity] = useState();

  async function getProvince() {
    try {
      const res = await axios.get(
        "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
      );
      console.log("res prov", res);
      setProvince(res?.data);
    } catch (error) {
      console.log("err get api indo", error);
    }
  }

  async function getCity() {
    try {
      const res = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectProvince}.json`
      );
      console.log("res city", res);
      setCity(res?.data);
    } catch (error) {
      console.log("err get api city", error);
    }
  }

  useEffect(() => {
    getProvince();
    if (selectProvince) {
      getCity();
    }
  }, [selectProvince]);

  return (
    <main
      id="main"
      className="main"
    >
      <Heading text="Form Input Agent Service Desk IOH" />
      <FormManual
        listProvince={province}
        selectProvince={selectProvince}
        setSelectProvince={setSelectProvince}
        listCity={city}
        selectCity={selectCity}
        setSelectCity={setSelectCity}
      />
    </main>
  );
};

export default InputManual;
