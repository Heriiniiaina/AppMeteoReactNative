import { View, Text } from 'react-native'
import React from 'react'
import Txt from '../TextFont/Txt'
import { getDate } from '@/services/dateService'
import { s } from './Clock.style'

type Props = {}

const Clock = (props: Props) => {
  return (
    <>
        <Txt style={s.timeText}>{getDate().toString().padStart(2,"0")}</Txt>
    </>
  )
}

export default Clock