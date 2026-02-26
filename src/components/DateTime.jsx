import React, { useEffect, useState } from 'react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const formatDateTime = (date) => {
  const weekday = WEEKDAYS[date.getDay()]
  const month = MONTHS[date.getMonth()]
  const day = date.getDate()

  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const period = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  if (hours === 0) {
    hours = 12
  }

  return `${weekday} ${month} ${day} ${hours}:${minutes} ${period}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{formatDateTime(now)}</div>
}

export default DateTime
