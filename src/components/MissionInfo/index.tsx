import React,{useState} from 'react'
import {MissionInfoList} from './MissionInfoList'
import {useLaunchMissionInfoQuery} from './../../generated/graphql'



export const MissionInfo = ({userName}:any) => {


    const [myid,setMyid]=useState(15)
        // if(!userName){
        //     return <h1>Loading...</h1>
        // }
        // !userName ? '<h3>Loading..</h3>': setMyid(userName)


    console.log("userName",userName)

    const { data, loading, error } = useLaunchMissionInfoQuery({
           variables: {

              id:userName.toString() // value for 'id'
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
