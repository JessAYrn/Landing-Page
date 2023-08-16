import React from 'react'
import styles from './Card.module.css'
import { useFeatureStore } from '../../store';


export const FeatureCardOne = ({children, featureNum, id})=>{
    const inViewFeature = useFeatureStore((state)=> state.inViewFeature);
    return <div className={styles.container}
    style={inViewFeature === id?{opacity:100}:{opacity:0}}
    >

        {children}
        <p>{featureNum}</p>
    </div>
}



export const FeatureCardTwo = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature two'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}


export const FeatureCardThree = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature three'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}


export const FeatureCardFour = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature four'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}

export const FeatureCardFive = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature five'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}

export const FeatureCardSix = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature six'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}

export const FeatureCardSeven = ({id})=>{
    return <FeatureCardOne
    featureNum='Feature seven'
    id={id}
    >
        <span/>
    </FeatureCardOne>
}