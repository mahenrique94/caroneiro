import React from 'react'

import { Text } from 'react-native'

import { i18n } from '../../../_translate/i18n'

import Screen from '../../../containers/Screen'

import Title from '../../../components/Title'

const DriverForm = () => (

    <Screen>
        <Title>{ i18n.t('titles.driversForm') }</Title>
    </Screen>

)

export default DriverForm
