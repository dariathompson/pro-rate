import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listServices } from '../actions/serviceActions';

function HomePage(props) {

  const serviceList = useSelector(state => state.serviceList);
  console.log(serviceList)
  const { services, loading, error } = serviceList;
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listServices());
      return () => {
          //
      }
  }, []) 

  return(
    loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : 
      <ul className="products">
          {
            services.map(service =>
              <li key={service._id}>
                <div className="product">
                  <Link to={'/service/' + service._id}>
                      <img className="product-image" src={service.image} alt="product"></img>
                  </Link>
                  <div className="product-name">
                    <a href="product.html"></a>
                    <Link to={'/service/' + service._id}>{service.name}</Link>
                  </div>
                  <div className="product-brand">{service.name}</div>
                  <div className="product-price">{service.category}</div>
                  <div className="product-rating">{service.rating} Stars ({service.numReviews} reviews)</div>
                </div>
              </li>
            )
          }
        </ul>
  )
}


export default HomePage;