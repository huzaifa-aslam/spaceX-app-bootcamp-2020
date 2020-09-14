import React,{useState} from 'react'
import {MissionInfoList} from './MissionInfoList'
import {useLaunchMissionInfoQuery} from './../../generated/graphql'



export const MissionInfo = ({userName}:any) => {



    const [myid,setMyid]=useState<any>(12)
    // setMyid(userName)

    const { data, loading, error } = useLaunchMissionInfoQuery({
           variables: {
              id:myid.toString() // value for 'id'
           },
         });

         if(loading){
            return <h3>Loading....</h3>
        }
        if(error || !data){
            return <h3>Error</h3>
        }
        console.log("MissionInfo",data)
       // console.log("check",check)

    return (
        <MissionInfoList data={data} />
    )
}
