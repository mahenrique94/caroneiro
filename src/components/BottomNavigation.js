import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import TravelList from '../features/travels/pages/TravelList'
import DriverForm from '../features/drivers/pages/DriverForm'

const BottomNavigation = createBottomTabNavigator({
    TravelList,
    DriverForm
})

export default createAppContainer(BottomNavigation)
