import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

const icon = props => (
    <Icon
        size={props.size}
        {...props}
    />
)

icon.defaultProps = {
    size : 30
}

icon.propTypes = {
    name : PropTypes.string.isRequired,
    size : PropTypes.number
}

export default icon
