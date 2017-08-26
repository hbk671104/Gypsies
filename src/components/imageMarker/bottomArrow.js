import React from 'react'
import Svg, { Polygon } from 'react-native-svg'
import styles from './style'

const bottomArrow = props => (
    <Svg style={styles.arrow} height={10} width={10}>
        <Polygon
            points='0,0 5,10 10,0'
            fill='white'
        />
    </Svg>
)

export default bottomArrow
