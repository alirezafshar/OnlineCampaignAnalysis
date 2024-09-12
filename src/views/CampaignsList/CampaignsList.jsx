import { useEffect } from 'react'
import { getCampaignsList } from '../../utils/services'
import { UseApi } from '../../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCampaign } from 'react-icons/md'
import './CampaignsList.scss'

const CampaignsList = () => {
  const navigate = useNavigate()
  // services
  const campaignsListService = UseApi(getCampaignsList())

  useEffect(() => {
    // call campaigns list
    campaignsListService.request()
  }, [])

  // navigate to specific campaign
  const handleNavigateToCampaign = (campId, campName) => {
    navigate('/campaign-details', { state: { campId, campName } })
  }

  return (
    <>
      {/* header */}
      <section className="dashboard__block">
        <h1 className="dashboard__title">Dashboard | Campaign List</h1>
      </section>
      <h2 className="dashboard__subtitle">Welcome to OAC Inc.</h2>
      <blockquote className="dashboard__desc">
        Explore our diverse online advertising campaigns and select your favorite. We’ll guide you to more detailed information about each campaign.
      </blockquote>
      {/* campaign block */}
      <section className="campList">
        {campaignsListService.status &&
          campaignsListService.data.map((camp) => (
            <ul key={camp.id} className="campList__block">
              {/* ribbon tag */}
              <li className={`dashboard__ribbon dashboard__ribbon--${camp.name.toLowerCase()}`}>Campaign</li>
              {/* campaign info */}
              <li className="campList__info">
                <figure className="campList__summary">
                  <MdOutlineCampaign className="campList__icon" />
                  <figcaption className="campList__caption">
                    {/* campaign code */}
                    <p className="campList__title">Code:</p>
                    <button className="campList__link" type="button" onClick={() => handleNavigateToCampaign(camp.id, camp.name)}>
                      {camp.id}
                    </button>
                    {/* campaign name */}
                    <p className="campList__title">Name:</p>
                    <button className="campList__link" type="button" onClick={() => handleNavigateToCampaign(camp.id, camp.name)}>
                      {camp.name}
                    </button>
                  </figcaption>
                </figure>
              </li>
            </ul>
          ))}
      </section>
    </>
  )
}

export default CampaignsList
