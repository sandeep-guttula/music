import React,{ useState, useEffect } from 'react'
import './widgets.css'
import apiClient from '../../spotify'
import WidgetCard from './WidgetCard'

const Widgets = ({artistID}) => {

    const [similar, setSimilar] = useState([])
    const [featured, setFeatured] = useState([])
    const [newRelease, setNewRelease] = useState([])

    useEffect(() => {
        apiClient.get(`/artists/${artistID}/related-artists`)
        .then(res => {
            const a = res.data?.artists?.slice(0, 3)
            setSimilar(a)
        }).catch(err => console.log(err))

        apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists?.items?.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums?.items?.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));

    },[artistID])



    return (
        <div className='widgets-body flex ' >
            <WidgetCard title='Similar Artists' similar={similar} />
            <WidgetCard title='Made for you' similar={featured} />
            <WidgetCard title='New Releases' similar={newRelease} />
        </div>
    )
}

export default Widgets