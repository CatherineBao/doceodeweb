import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import App from './App'
import Nav from './components/Nav'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Resources from './pages/Resources'

import Rust from './pages/courses/Rust'
import Python from './pages/courses/Python'
import Unity from './pages/courses/Unity'

import TermsOfService from './pages/legal/TermsOfService'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'

library.add(fas)

render(
  <Auth0Provider
    domain="doceode.us.auth0.com"
    clientId="pxxHkrGhCGwH1OlK6hKd9BSrMORxQDAr"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <div className='bg-dark-blue'>
        <Nav />
        <div className='text-white-gray px-4 sm:px-14 lg:px-36 pt-20'>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/events' element={<Events />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resources' element={<Resources />} />
						<Route path='/courses/rust' element={<Rust />} />
						<Route path='/courses/python' element={<Python />} />
						<Route path='/courses/unity' element={<Unity />} />
  					<Route path='/legal/terms-of-service' element={<TermsOfService />} />
  					<Route path='/legal/privacy-policy' element={<PrivacyPolicy />} />
          </Routes>
        </div>
  			<Footer />
      </div>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
)