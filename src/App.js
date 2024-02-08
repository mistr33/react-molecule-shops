import "./App.css";
import Controls from "./components/Controls";
import ShopsTableHeader from "./components/ShopsTableHeader";

const inputData = [
  { id: 4, name: "store1", boutique: "byredo", status: "A" },
  { id: 5, name: "store2", boutique: "vilhelm", status: "D" },
  { id: 25, name: "store3", boutique: "penza", status: "A" },
];

function App() {
  const stores = inputData;

  const tableData = stores.map((x) => (
    <div className="shopTableRow row">
      <div class="col">{x.name}</div>
      <div class="col">{x.boutique}</div>
      <div class="col">{x.status}</div>
      <div class="col">{x.address}</div>
      <div class="col">{x.samovivoz}</div>
      <div class="col">{x.sort}</div>
    </div>
  ));

  return (
    <div className="App">
      <section>
        <div className="shopsTable grid">
          <ShopsTableHeader />
          <div className="shopsTableBody">{tableData}</div>
        </div>
      </section>
      <section>
        <Controls />
      </section>
    </div>
  );
}

export default App;
