import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsService } from '../actions/serviceActions';

function ServicePage(props) {

  const serviceDetails = useSelector(state => state.serviceDetails);
  console.log(serviceDetails)
  const { service, loading, error } = serviceDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.match.params.id)
    dispatch(detailsService(props.match.params.id));
  }, [])

  return(
    <div>
      { loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        (
          <div className=''>
          <div className="">
            <img src={service.image} alt="service"></img>
          </div>
          <div className="">
            <ul>
              <li>
                <h4>{service.name}</h4>
              </li>
              <li>
                {service.category}
              </li>
              <li>
                {service.rating} Stars ({service.numReviews} Reviews)
              </li>
            </ul>
          </div>
        </div>
        )
      }

    </div>
        
  )
}

export default ServicePage;