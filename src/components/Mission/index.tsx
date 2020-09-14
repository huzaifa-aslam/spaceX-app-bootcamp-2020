import React from 'react'
import {useLaunchesInfoQuery} from '../../generated/graphql'
import {MissionList} from './MissionList'
export const Missions = ({callback}:any) => {
    const { data, loading, error } = useLaunchesInfoQuery()
    if(loading){
        return <h3>Loading....</h3>
    }
    if(error || !data){
        return <h3>Error</h3>
    }
   // console.log("data",data)
    return (
        <MissionList data={data} callback={callback}/>
    )
}
