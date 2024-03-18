import { Home } from "./pages/Home";
import axios from "axios";

import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  const [limit, setlimit] = useState(18);
  const [fixedData, setfixedData] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const clickHandler = () => {
    const updateLimit = limit + 18;
    setlimit(updateLimit);
  };

  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";
    const params = { limit: limit };
    const headers = {
      "X-RapidAPI-Key": "97b481a1acmshe87a16136a7b844p1bafadjsn14c9b18b7497",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    };

    const queryString = new URLSearchParams(params).toString();
    const fetchUrl = `${url}?${queryString}`;
    fetch(fetchUrl, {
      method: "GET",
      headers: headers,
    })
      .then((data) => data.json())
      .then((res) => {
        setdata(res);
        setfixedData(res);
        console.log(res);
      });
  }, [limit]);

  return (
    <>
      <div className="container">
        <div className="fl">
          {" "}
          <input
            type="search"
            value={searchTxt}
            name=""
            id=""
            placeholder="search"
            onInput={(e) => {
              setSearchTxt(e.target.value);
              const filteredData = data.filter((elem) => {
                return elem.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase());
              });

              if (e.target.value != "") {
                setdata(filteredData);
              } else {
                setdata(fixedData);
              }
            }}
          />
        </div>

        <div className="flex">
          {data.map((ele) => {
            return (
              <div className="cards" key={ele.id}>
                <Home
                  gif={ele.gifUrl}
                  name={ele.name}
                  secondaryMuscles={ele.secondaryMuscles}
                />
              </div>
            );
          })}
        </div>
        <button className="btn" onClick={clickHandler}>
          more
        </button>
      </div>
    </>
  );
}

export default App;
