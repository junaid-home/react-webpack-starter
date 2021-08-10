import React from 'react'
import { render as renderRootComponent } from 'react-dom'

import App from './components/app/App'

renderRootComponent(<App />, document.getElementById('app'))
