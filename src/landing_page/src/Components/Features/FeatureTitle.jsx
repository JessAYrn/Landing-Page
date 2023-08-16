import React, { useEffect, useRef } from 'react'
import styles from './FeatureTitle.module.css'
import { useInView } from 'framer-motion';
import { useFeatureStore } from '../../store';



const FeatureTitle = ({children, id}) => {
  const ref = useRef(null);
   const isInView = useInView(ref, {margin:'-50% 0px -50% 0px'})
   const setInViewFeature = useFeatureStore(state=>state.setInViewFeature)

   useEffect(()=>{
    if(isInView) setInViewFeature(id);
   },[isInView, id, setInViewFeature])
  return (
    <>
    <h2 
    ref={ref}
    className={isInView ? styles['inView']:styles['title'] }>{children}</h2>
    </>    
  )
}

export default FeatureTitle