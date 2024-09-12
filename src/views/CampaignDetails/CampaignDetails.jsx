import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UseApi } from '../../utils/hooks'
import { getMetricsInfo } from '../../utils/services/Campaign'
import { RiArrowGoBackLine } from 'react-icons/ri'
import './CampaignDetails.scss'

const CampaignDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { campId, campName } = location.state ?? { campaignId: '', campName: '' }
  const [trustedId, setTrustedId] = useState(false)
  const [newNum, setNewNum] = useState(0)
  const [newMetrics, setNewMetrics] = useState(false)
  const [storeData, setStoreData] = useState({ impressions: 0, clicks: 0, users: 0 })
  // services
  const metricsInfo = UseApi(getMetricsInfo(campId, newNum))

  useEffect(() => {
    // client cannot access to the page without proper campaign id
    if (!campId.toString()) {
      navigate('/404')
    } else {
      setTrustedId(true)
    }
  }, [])

  // navigate to home
  const handleNavigateToHome = () => {
    navigate('/')
  }

  useLayoutEffect(() => {
    // ping the server every 5 seconds
    if (trustedId) {
      const interval = setInterval(() => {
        setNewMetrics(false)
        setNewNum((oldNum) => oldNum + 1)
      }, 5000)
      // cleanup on unmount
      return () => clearInterval(interval)
    }
  }, [trustedId])

  useEffect(() => {
    // call metrics info
    metricsInfo.request()
    setNewMetrics(true)
  }, [newNum])

  useEffect(() => {
    // add new data to current data
    if (newMetrics && metricsInfo.status) {
      setStoreData((oldData) => ({
        ...oldData,
        impressions: oldData.impressions + metricsInfo?.data?.impressions,
        clicks: oldData.clicks + metricsInfo?.data?.clicks,
        users: oldData.users + metricsInfo?.data?.users
      }))
    }
  }, [newMetrics, metricsInfo.status])

  return (
    <>
      {/* header */}
      <section className="dashboard__block campDetails__blockFix">
        <h1 className="dashboard__title">Dashboard | Campaign Details</h1>
        <button className="campDetails__btn" type="button" onClick={() => handleNavigateToHome()}>
          <RiArrowGoBackLine className="campDetails__icon" /> Campaign List
        </button>
      </section>
      <h2 className="dashboard__subtitle">Campaign {campName}</h2>
      <blockquote className="dashboard__desc campDetails__desc">
        Here, you can view the key performance metrics of the {campName} Campaign. Please note that the data is refreshed and updated every 5 seconds.
      </blockquote>
      {/* campaign details total */}
      <section className="dashboard__block">
        <p className={`dashboard__ribbon dashboard__ribbon--${campName.toLowerCase()}`}>CAMP INFO</p>
        {/* total metrics */}
        {metricsInfo.data && (
          <ul className="campDetails__total">
            <li className="campDetails__totalInfo">
              Total Impressions<span className={`campDetails__num campDetails__num--${campName.toLowerCase()}`}>{storeData.impressions}</span>
            </li>
            <li className="campDetails__totalInfo">
              Total Clicks<span className={`campDetails__num campDetails__num--${campName.toLowerCase()}`}>{storeData.clicks}</span>
            </li>
            <li className="campDetails__totalInfo">
              CTR (Click Through Rate)
              <span className={`campDetails__num campDetails__num--${campName.toLowerCase()}`}>
                {((storeData.clicks / storeData.impressions) * 100).toFixed(1)}%
              </span>
            </li>
            <li className="campDetails__totalInfo">
              Total Users<span className={`campDetails__num campDetails__num--${campName.toLowerCase()}`}>{storeData.users}</span>
            </li>
          </ul>
        )}
      </section>
      {/* campaign details current */}
      <section className="campDetails__block">
        <h2 className="dashboard__subtitle campDetails__subtitle">Most Recent Metrics</h2>
        {/* current metrics */}
        {metricsInfo.data && (
          <ul className="campDetails__current">
            <li className={`campDetails__currentInfo campDetails__currentInfo--${campName.toLowerCase()}`}>
              Current Number<span className="campDetails__lastNum">{newNum}</span>
            </li>
            <li className={`campDetails__currentInfo campDetails__currentInfo--${campName.toLowerCase()}`}>
              Impressions<span className="campDetails__lastNum">{metricsInfo.data.impressions}</span>
            </li>
            <li className={`campDetails__currentInfo campDetails__currentInfo--${campName.toLowerCase()}`}>
              Clicks<span className="campDetails__lastNum">{metricsInfo.data.clicks}</span>
            </li>
            <li className={`campDetails__currentInfo campDetails__currentInfo--${campName.toLowerCase()}`}>
              CTR
              <span className="campDetails__lastNum">{((metricsInfo.data.clicks / metricsInfo.data.impressions) * 100).toFixed(1)}%</span>
            </li>
            <li className={`campDetails__currentInfo campDetails__currentInfo--${campName.toLowerCase()}`}>
              Users<span className="campDetails__lastNum">{metricsInfo.data.users}</span>
            </li>
          </ul>
        )}
      </section>
    </>
  )
}

export default CampaignDetails
