import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title
