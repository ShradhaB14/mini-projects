import { useState } from "react";
function App() {
  const productList = ["Mobile", "Laptop", "Mouse", "Keyboard", "Charger"];
  const [filteredList, setFilteredList] = useState(productList);
  const [searchString, setSearchString] = useState("");

  const searchProduct = (searchStr) => {
    setSearchString(searchStr);
    if (searchStr.trim() !== "") {
      const tempList = productList.filter((el) => {
        return el.toLowerCase().includes(searchStr.toLowerCase());
      });
      setFilteredList(tempList);
    } else {
      setFilteredList(productList);
    }
  };

  return (
    <>
      <div>
        <input
          onChange={(e) => searchProduct(e.target.value)}
          value={searchString}
        ></input>
        {/* <button onClick={() => searchProduct()}>Search Product</button> */}
      </div>
      <h1>Product List</h1>
      <div>
        {filteredList.length === 0
          ? "No Result Found"
          : filteredList.map((el, index) => (
              <li key={index} style={{ "list-style": "none" }}>
                {el}
              </li>
            ))}
      </div>
    </>
  );
}
export default App;
