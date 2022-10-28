// import React from 'react'
// import './Card.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'


// const Card = ({ filterProducts }) => {
//     return (
// //         <div className="row card_row">
//             {/* {
//                 filterProducts.map((prod, i) => {
//                     return (
//                         <div className="col card_container" key={i}>
//                             <div className="img_section">
//                                 <img src={prod.prod_img} />
//                             </div>
//                             <div className="desc_section">
//                                 <h6 className='prod_name'>{prod.prod_name} <span className='prod_clr'>({prod.prod_clr}, {prod.prod_rom}GB)</span></h6>
//                                 <p className='prod_ram'>{prod.prod_ram}GB RAM</p>
//                                 <span className='prod_rating'>{prod.prod_rating} <FontAwesomeIcon color='#FFD700' icon={faStar} /></span> <span className='prod_cus_count'>( {prod.prod_cus_count} )</span><br />
//                                 <h5 className='prod_price'>₹{prod.prod_price_with_offer}</h5>&nbsp;&nbsp;
//                                 <span className='prod_off_price'>₹{prod.prod_price}</span>
//                                 <h6 className='prod_website'>{prod.prod_website}.com</h6>
//                             </div>
//                         </div>
//                     )
//                 })
//             } */}
// //         </div>
// //     )
// // }

// export default Card

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

function Card() {
  let [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number);
          setPageNumber(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  let [cardData, setCardData] = useState([]);
  let getData = async () => {
    let res = await axios.get("https://webscraping0.herokuapp.com/getdata");
    setCardData(res.data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  const [pageNumber, setPageNumber] = useState(1);
  const usersperPage = 6;
  const pageVisited = (pageNumber - 1) * usersperPage;
  const displayUsers = cardData.slice(pageVisited, pageVisited + usersperPage);
  return (
    <>
      <Row xs={1} md={2} className="g-4 cards-cont">
        {displayUsers.map((e, i) => {
          return (
            <Col key={i} className="cards-element">
              <div className="wrapper">
                <div className="product-img">
                  <img className="img-container" src={e.Image_url} alt="Product" />
                </div>
                <div className="product-info">
                  <div className="product-text">
                    <h1>{e.Name_String}</h1>
                    <h1>{e.Rating}</h1>
                    <h1>{e.Price}</h1>
                    <h1>{e.Final_Price}</h1>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div>
        <Pagination className="pagination">{items}</Pagination>
      </div>
    </>
  );
}

export default Card;
