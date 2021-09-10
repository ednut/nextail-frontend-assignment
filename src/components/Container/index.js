import React, { useState, useEffect } from 'react';
import ContainerStyle from './containerStyles';
import Card from '../Card';
import Popup from '../Popup';

const Container = () => {
  const [stock, setStock] = useState([]);
  const [popup, setPopup] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      let r = await fetch('/data/products.json');
      let stock = await r.json();
      setStock(stock);
    };
    getFriends();
  }, []);

  const complete = (product) => {
    let products = stock.filter((x) => {
      return x.code !== product.code;
    });
    setStock(products);
    setPopup(false);
  };

  const openPopup = (product) => {
    setPopup(!popup);
    product && setProduct(product);
  };

  const myData = []
    .concat(stock)
    .sort((a, b) => (a.sales_ranking > b.sales_ranking ? 1 : -1))
    .map((product) => (
      <Card key={product.code} product={product} openPopup={openPopup} />
    ));

  return (
    <ContainerStyle>
      {myData}
      {popup && (
        <Popup complete={complete} product={product} openPopup={openPopup} />
      )}
    </ContainerStyle>
  );
};

export default Container;
