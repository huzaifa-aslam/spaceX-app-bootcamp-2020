import React from 'react'
import {LaunchesInfoQuery} from './../../generated/graphql'
interface Props{
    data: LaunchesInfoQuery
}

export const MissionList:React.FC<Props> = ({data}) => {
    return (
        <div>
            <h3>List</h3>
            <form>
            {data.launches?.map((item,index)=>{
               return  <div key={index}><button>{item?.mission_name}</button></div>
            })}
            </form>
        </div>
    )
}
