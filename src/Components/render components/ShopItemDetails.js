import React, {useState, useEffect} from "react";
import './ShopItemDetails.css';

function ShopItemDetails(props) {
  const name = props.match.params.name;
  const [item, setItem] = useState();
  useEffect(() => {
    fetchItem();

  }, [])

  const fetchItem = async () => {
    const data = await fetch(`http://34.172.110.61/it-patch-mgmt/medicines/find?medicineName=${name}`);
    const response = await data.json();
    const item = response[0];
    console.log(item);
    setItem(item);
  }

  const handleQuantityChange= (e) => {
    setQuantity(e.target.value);
  }

  const [quantity, setQuantity] = useState(1);
  const quantityComponent = <div>
    <label htmlFor="quantity">Quantity</label>
    <select value={quantity} onChange={handleQuantityChange} id="quantity" name="quantity">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button onClick={() => props.addToCart(item, quantity)}>Add to cart</button>
  </div>;

  const prescriptionComponent = <div>
    <label htmlFor="prescription">Select file</label>
    <input type="file"
           id="prescription" name="prescription"
           accept="image/png, image/jpeg" />
  </div>

  if(!item) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="details">
      <div className="heading">
        <h3>{item.name}</h3>
      </div>
      <div className="price">
        <p>&#x20B9; {item.mrp}</p>
      </div>
      <p>{item.name}</p>
      <p>{item.Fact_Box}</p>
      {
        item.stock === "In Stock" ? item.prescription_required === "Prescription Required" ?
          prescriptionComponent
           : quantityComponent : <div>Out of stock</div>
      }
    </div>
  )
}

export default ShopItemDetails;
