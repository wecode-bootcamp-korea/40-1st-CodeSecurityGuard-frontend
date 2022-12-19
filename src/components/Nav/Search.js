import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import Modal from '../../components/Modal/Modal';
import './Search.scss';

function Search() {
  const [ModalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState([]);
  const accessToken = localStorage.getItem('token') ?? '';

  const { id } = useParams();
  const handleOpenModal = () => {
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
  };
  const moveToLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    fetch(`${BASE_URL}/products/search?keyword=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setSearchProduct(result.data));
  }, [id]);

  const onCart = () => {
    if (!accessToken) {
      alert('장바구니를 사용하시려면 로그인을 하셔야됩니다.');
      moveToLogin();
    }
    fetch(`${BASE_URL}/carts/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        productId: id,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(() => {
        handleOpenModal();
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <div>{ModalOpened && <Modal handleCloseModal={handleCloseModal} />}</div>
      <div className="searchKeywordBox">
        <div className="searchProductTitle">
          '<span className="searchKeyword">{id}</span>'에 대한 검색 결과
        </div>
      </div>
      <div className="productCardList grid">
        {searchProduct.map((data, i) => (
          <div className="searchproductBox" key={i}>
            <div className="thumbnail">
              <Link to={`/productdetail/${id}`}>
                <img
                  className="thumbnailImage"
                  src={data.thumbnailImageUrl}
                  alt={data.name}
                  onClick={() => window.scrollTo({ top: 0 })}
                />
              </Link>
              <img
                className="cartImage"
                src="/images/carticonimage.jpg"
                alt="카트아이콘"
                onClick={onCart}
              />
            </div>
            <div className="description">
              <div className="productName">{data.name}</div>
              <div className="productPrice">
                {Math.floor(data.price).toLocaleString()}원
              </div>
              <div className="productInformation">{data.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
