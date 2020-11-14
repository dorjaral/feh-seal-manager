import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import BarracksPage from './pages/barracks/barracks.component'
import StatsPage from './pages/stats/stats.component'
import AboutPage from './pages/about/about.component'

import heroesData from '../src/data/heroes.json'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={BarracksPage} />
      <Route path='/stats' component={StatsPage} />
      <Route path='/about' component={AboutPage} />
    </Switch>
  </div>
)


export default App