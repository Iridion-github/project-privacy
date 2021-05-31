const getOrdinal = (day) => {
  let result = ""
  if (day === 1) result = "st"
  if (day === 2) result = "nd"
  if (day === 3) result = "rd"
  if (day >= 4) result = "th"
  return result
}

export const datePrettifier = (inputDate, lang, shorter) => {
  const giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ]
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const rawDate = new Date(inputDate)
  let day = rawDate.getDate()
  if (lang === "eng") day += getOrdinal(day)
  const giornoSettimana = giorniSettimana[rawDate.getDay()]
  const weekday = weekdays[rawDate.getDay()]
  const mese = mesi[rawDate.getMonth()]
  const month = months[rawDate.getMonth()]
  const year = rawDate.getFullYear()
  // let result = (lang === "ita")
  //   ? (shorter ? "" : giornoSettimana + ' ') + day + ' ' + mese + ' ' + year
  //   : (shorter ? "" : weekday + ' ') + month + ' ' + day + ' ' + year
  let result = (lang === "ita")
    ? {
      weekday: shorter ? "" : giornoSettimana,
      day: day,
      month: mese,
      year: year,
    }
    :
    {
      weekday: shorter ? "" : weekday,
      day: day,
      month: month,
      year: year,
    }
  return result
}