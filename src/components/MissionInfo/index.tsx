import React from 'react'
import {MissionInfoList} from './MissionInfoList'
import {useLaunchMissionInfoQuery} from './../../generated/graphql'
export const MissionInfo = () => {
    const { data, loading, error } = useLaunchMissionInfoQuery({
           variables: {
              id:'10' // value for 'id'
           },
         });

         if(loading){
            return <h3>Loading....</h3>
        }
        if(error || !data){
            return <h3>Error</h3>
        }
        console.log("MissionInfo",data)

    return (
        <MissionInfoList data={data}/>
    )
}
