import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import "dayjs/locale/zh-cn"

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export type dateTemType= "datetime"|"date"|"time"|"current"|undefined

export function dateTimeFormat(date: string):string {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

export function dateFormat(date: string):string {
  return dayjs(date).format('YYYY-MM-DD')
}

export function timeFormat(date: string):string {
  return dayjs(date).format('HH:mm:ss')
}

export function dateCurrentFormat(date: string):string {
  return dayjs().to(dayjs(date))
}

export function dateTemFormat(date: string, name?:dateTemType) {
  if(name === "date"){
    return dateFormat(date)
  }
  if(name === "time"){
    return timeFormat(date)
  }
  if(name === "current"){
    return dateCurrentFormat(date)
  }
  return dateTimeFormat(date)
}
