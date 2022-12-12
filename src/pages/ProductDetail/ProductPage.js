import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.118:8000/products/')
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  console.log(products);

  return (
    <section>
      <nav>
        {products.map(({ id, brandId, name, thumbnailImageUrl, price }) => (
          <Link key={id} to={`/productdetail/${id}`}>
            <p>
              <strong>{brandId}</strong>
            </p>
            <p>{name}</p>
            <img alt="avatar" src={thumbnailImageUrl} />
            <p>{typeof parseFloat(price)}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default List;
