
import React, { useEffect, useState } from 'react'
import Txt from '../TextFont/Txt'
import { getDate } from '@/services/dateService'
import { s } from './Clock.style'

type Props = {}

const Clock = (props: Props) => {
    const [time,setTime] = useState(getDate())
    useEffect(()=>{
    const interval=    setInterval(()=>{
            setTime(getDate())
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
   
        <Txt style={s.timeText}>{time}</Txt>
   
  )
}

export default Clock