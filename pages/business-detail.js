import React, { useMemo } from 'react'
import { useQuery } from "@apollo/client";
import { GET_BUSINESS } from '../graphql/queries';
import { useRouter } from 'next/router'
import BusinessSection from '../components/BusinessSection/BusinessSection';
import InfoList from '../components/InfoList/InfoList';
import ReviewList from '../components/ReviewList/ReviewList';
import ScheduleList from '../components/ScheduleList/ScheduleList';
import ReactLoading from 'react-loading';

export default function Business() {
    const router = useRouter();
    const { alias = '' } = router.query;

    const { loading, error, data} = useQuery(GET_BUSINESS, {
        variables: { alias },
        fetchPolicy: 'cache',
      });


    const businessInfo = useMemo(()=>{
      if (data?.business){
        const info = [
          {title: 'Ubicación', description: data.business.location.formatted_address ?  data.business.location.formatted_address : 'No disponible'},
          {title: 'Teléfono', description: data.business.display_phone ? data.business.display_phone : 'No disponible'},
          {title: 'Precios', description: data.business.price ? data.business.price : 'No disponible'},
          {title: 'Disponibilidad', description: data.business.is_closed ? 'Permanentemente cerrado' : data.business.hours.length ? data.business.hours?.[0].is_open_now ? 'Abierto' : 'Cerrado' : 'No disponible'},
        ];
        return info;
      }
      return []
    },[data])
    
  return (
    loading || data === undefined ? (
      <div className='business-detail--loading'>
        <ReactLoading type={'spin'} color={'blue'} height={24} width={24}/>
      </div>
    ) : (
    <div className='business-detail--container'>
      <div className='business-detail--header-container'>
          <img alt='Business Image' className='business-detail--photo' src={data.business?.photos?.[0]} />
          <div  className='business-detail--photo-header-content '>
            <h1>{data.business.name}</h1>
            <h1>RAITING: {data.business.rating}</h1>
          </div>
      </div>
      <BusinessSection role="businessDetails" aria-label="Business details like location, phone, prices, etc."  title={'Información del negocio'}>
        <InfoList info={businessInfo} />
      </BusinessSection>
      {data.business.hours.length > 0 && (
      <BusinessSection role="businessSchedule" aria-label="Business schedule from monday to sunday" title={'Horarios'}>
        <ScheduleList schedule={data.business.hours[0].open}/>
      </BusinessSection>
      )}
      <BusinessSection role="businessReviews" aria-label="Business reviews from customers" title={`Reviews (${data.business.review_count})`}>
        <ReviewList reviews={data.business.reviews}/>
      </BusinessSection>
    </div>
    )
  )
}
