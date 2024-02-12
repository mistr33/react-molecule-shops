import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import ShopsTableHeader from "./components/ShopsTableHeader";

//import MiniCalc from "./components/MiniCalc";

const inputDataTemp = [
  { id: 4, name: "store1", boutique: "byredo", status: "A" },
  { id: 5, name: "store2", boutique: "vilhelm", status: "D" },
  { id: 25, name: "store3", boutique: "penza", status: "A" },
];

const baseURL = "https://molecule.ru/fapi.php";

function App() {
  //const stores = inputData;

  const [stores, setStores] = useState(null);
  const [fapiData, setFapiData] = useState(inputDataTemp);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setFapiData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  if (!fapiData) return null;

  /*
  const tableData = fapiData.map((x, key) => (
    <div className="shopTableRow row">
      <div class="col">{x.name}</div>
      <div class="col">{x.boutique}</div>
      <div class="col">{x.status}</div>
      <div class="col">{x.address}</div>
      <div class="col">{x.samovivoz}</div>
      <div class="col">{x.sort}</div>
    </div>
  ));
*/
  //setStores(tableData);

  return (
    <div className="App">
      <section>
        <div className="shopsTable grid">
          <ShopsTableHeader />
          <div className="shopsTableBody">{stores}</div>
        </div>
      </section>
      <section>
        <Controls />
      </section>
      {/*
      <section>
        <MiniCalc />
      </section>
  */}
    </div>
  );
}

export default App;
