import React from 'react'
import {LaunchMissionInfoQuery} from './../../generated/graphql'
interface Props{
    data: LaunchMissionInfoQuery

}

export const MissionInfoList:React.FC<Props> = ({data}) => {
    console.log("abc",data.launch)

    return (
        <div>
            {/* {data.launch?.map((item:any,index:Number)=>{
                return <div>{item.mission_name}</div>
            })} */}


    {<div>{data.launch?.mission_name}</div>}
    {<div>{data.launch?.launch_year}</div>}
    {<div>{data.launch?.details}</div>}
        </div>
    )
}
