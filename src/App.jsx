import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Layout'

const CampaignsList = lazy(() => import('./views/CampaignsList').then((m) => ({ default: m.CampaignsList })))
const CampaignDetails = lazy(() => import('./views/CampaignDetails').then((m) => ({ default: m.CampaignDetails })))
const NotFound = lazy(() => import('./views/NotFound').then((m) => ({ default: m.NotFound })))

function App() {
  const location = useLocation()
  return location.pathname !== '/404' ? (
    <Layout>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<CampaignsList />} />
          <Route path="/campaign-details" element={<CampaignDetails />} />
          <Route path="*" element={<Navigate to={'/404'} replace />} />
        </Routes>
      </Suspense>
    </Layout>
  ) : (
    <Layout>
      <NotFound />
    </Layout>
  )
}

export default App
