// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    const handleClick= () => {
        var currList = props.cart
        console.log(currList, "beginning list")
        var newItem = props.info.name
        console.log(props.cart, "current cart")
        props.setCart([...props.cart, newItem]);
    }
    return <div>
        <h2>{props.info.name}</h2>
        <h3>{props.info.description}</h3>
        <h3 style={{color:"blue"}}>{props.info.price}</h3>
        <img src = {props.info.image} width="50%" height="50%"/>
        <button onClick={handleClick}> Add to Cart </button>
        </div>;
  }

export default BakeryItem

