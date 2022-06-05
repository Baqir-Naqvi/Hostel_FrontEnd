import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/HNavbar'
import Footer from './components/footer/Footer'
import Loader from './layout/loader/Loader'
const LazyHomePage = React.lazy(() => import('./pages/HomePage'))
const LazyAboutPage = React.lazy(() => import('./pages/About'))
const LazyContactPage = React.lazy(() => import('./pages/Contactus'))
const LazyDetails = React.lazy(() => import('./pages/Details'))
const LazyRooms = React.lazy(() => import('./pages/Rooms'))
const LazyRegister = React.lazy(() => import('./pages/Register'))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyHomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/rooms"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyRooms />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyAboutPage />
              </React.Suspense>
            }
          />

          <Route
            path="/rooms/details/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyDetails />
              </React.Suspense>
            }
          />

          <Route
            path="/contactus"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyContactPage />
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyRegister />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
