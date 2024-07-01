const formatDigit = (digits: number) => digits.toString().padStart(2, '0')

const getDigits = (time: number) => {
  const hours = Math.floor((time % (36e5 * 24)) / 36e5)
  const minutes = Math.floor((time % 36e5) / 6e4)
  const seconds = Math.floor((time % 6e4) / 1e3)

  const combined = { hours, minutes, seconds }

  const formatted = Object.entries(combined).reduce(
    (acc, [k, d]) => ({ ...acc, [k]: formatDigit(d) }),
    {} as typeof combined
  )

  return formatted
}

export default getDigits
