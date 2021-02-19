import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from './src/views/Home'
import Task from './src/views/Task'
import QrCode from './src/views/QRCode'

const Router = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode
  })
)

export default function App() {
  return <Router/>
}