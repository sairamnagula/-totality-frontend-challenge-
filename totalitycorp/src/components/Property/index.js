import { Component } from "react";

import PropertyItem from "../PropertyItem";

import "./index.css";

const propertyLists = [
  {
    uniqueNo: 1,
    imageUrl:
      "https://www.housenameplate.co.uk/media/wysiwyg/Orchard_House_2.jpg",
    name: "Orchard House",
    rating: 4,
    price: 4000,
    description:
      "Popular amongst literary fans as well as those of us lucky enough to have a home situated amongst a beautiful orchard.  Orchard House is the name of the long-standing Massachusetts home of the famous literary family, the Alcotts.  Louisa May Alcott, of ‘Little Women’ fame, returned to her home, Orchard House",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://www.housenameplate.co.uk/media/wysiwyg/Meadow_View.jpg",
    name: "Meadow View",
    rating: 4.5,
    price: 10000,
    description:
      "If you are lucky enough to have stunning views of meadows and countryside then this popular house name suggests the tranquillity and natural beauty surrounding your home.",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://www.housenameplate.co.uk/media/wysiwyg/Rose_Cottage.jpg",
    name: "Rose Cottage",
    rating: 5,
    price: 9000,
    description:
      "Giving the impression of an idyllic way of life. Far from the hustle and bustle of modern day life. Rose Cottage conjures up associations of a traditional English home set amongst beautiful rose bush gardens.",
  },
];

let cartsList = [];

class Property extends Component {
  //   state = {
  //     cartsList: [],
  //   };

  addToCart = (uniqueNo) => {
    // const { cartsList } = this.state;

    const cartItem = propertyLists.filter((each) => each.uniqueNo === uniqueNo);

    // this.setState({
    //   cartsList: [...cartsList, cartItem],
    // });

    cartsList.push(cartItem);
    localStorage.setItem("carts_list", JSON.stringify(cartsList));
  };

  render() {
    // const { cartsList } = this.state;
    return (
      <div className="property-container">
        <h1 className="property-title">Property Plans</h1>
        <ul className="list-container">
          {propertyLists.map((eachProperty) => {
            return (
              <PropertyItem
                name={eachProperty.name}
                imageUrl={eachProperty.imageUrl}
                description={eachProperty.description}
                rating={eachProperty.rating}
                price={eachProperty.price}
                addToCart={this.addToCart}
                uniqueNo={eachProperty.uniqueNo}
                key={eachProperty.uniqueNo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Property;
