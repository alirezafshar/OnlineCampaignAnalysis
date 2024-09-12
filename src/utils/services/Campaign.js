import axios from "axios"

export const getCampaignsList = () => {
    return () => axios.get('/api/campaigns')
}

export const getMetricsInfo = (cid, num) => {
    return () => axios.get(`/api/campaigns/${cid}?number=${num}`)
}