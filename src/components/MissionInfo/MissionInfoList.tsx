import React from 'react'
import {LaunchMissionInfoQuery} from './../../generated/graphql'
interface Props{
    data: LaunchMissionInfoQuery
}

export const MissionInfoList:React.FC<Props> = ({data}) => {
    return (
        <div>
            {/* {JSON.stringify(data)} */}
    {<div>{data.launch?.mission_name}</div>}
        </div>
    )
}
