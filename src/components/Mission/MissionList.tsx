import React,{useState} from 'react'
import {LaunchesInfoQuery} from './../../generated/graphql'
//import {getName} from './../MissionInfo/index'
interface Props{
    data: LaunchesInfoQuery
    callback:any
}

export const MissionList:React.FC<Props> = ({data,callback}) => {
const [name,setName]=useState<any>()
    return (
        <div>
            <h3>List</h3>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>{callback(e,name)}}>
            {data.launches?.map((item,index)=>{
               return  <div key={index}><button  onClick={()=>{setName(15)}} id="1">{item?.mission_name}</button><span>{item?.mission_id}</span></div>
            })}

            </form>
        </div>
    )
}
