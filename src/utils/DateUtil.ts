// import { format } from "date-fns";
import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')

// export default {
// 	formatBirthday: (timestamp, novalue = "") => (timestamp > 0 ? format(timestamp, "DD/MM/YYYY") : novalue),
// 	formatLongDate: timestamp => format(timestamp, "dddd, DD/MM/YYYY"),
// 	formatShortDate: timestamp => format(timestamp, "DD/MM/YYYY"),
// 	formatTime: timestamp => format(timestamp, "HH:mm"),
// 	formatGroupKey: timestamp => format(timestamp, "YYYYMMDD"),
// 	formatTimeDate: timestamp => format(timestamp, "HH:mm DD/MM/YYYY"),
// 	formatDateTime: timestamp => format(timestamp, "DD/MM/YYYY HH:mm"),
// };

export { moment }

export default {
  formatBirthday: (timestamp?: any, novalue = '') =>
    timestamp > 0
      ? moment(timestamp).utcOffset(7).format('DD/MM/YYYY')
      : novalue,
  formatLongDate: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('dddd, DD/MM/YYYY'),
  formatShortDate: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('DD/MM/YYYY'),
  formatDateMonth: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('DD/MM'),
  formatInputDate: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('DD-MM-YYYY'),

  formatDisplayDate: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('DD/MM/YYYY'),
  formatPayloadDate: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('YYYY-MM-DD'),
  formatTime: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('HH:mm'),
  formatTimeSeconds: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('HH:mm:ss'),
  formatMinnis: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('mm'),
  formatGroupKey: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('YYYYMMDD'),
  formatTimeDate: (timestamp?: any) =>
    moment(timestamp).utc().format('HH:mm DD/MM/YYYY'),
  formatTimeDateUtc7: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('HH:mm DD/MM/YYYY'),
  formatTimeDateReview: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('HH:mm, DD/MM/YYYY'),
  formatTimeDateConversation: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('HH:mm, DD/MM'),
  formatDateTime: (timestamp?: any) =>
    moment(timestamp).utcOffset(7).format('DD/MM/YYYY HH:mm'),
  formatRelativeLongDate: (timestamp?: any) => {
    return moment(timestamp).utcOffset(7).calendar(null, {
      sameDay: '[Hôm nay,] DD/MM/YYYY',
      nextDay: '[Ngày mai,] DD/MM/YYYY',
      nextWeek: 'dddd, DD/MM/YYYY',
      lastDay: '[Hôm qua,] DD/MM/YYYY',
      lastWeek: 'dddd, DD/MM/YYYY',
      sameElse: 'dddd, DD/MM/YYYY',
    })
  },
  format: (timestamp?: any) => {
    return `${timestamp.slice(8, 10)}/${timestamp.slice(
      5,
      7
    )}/${timestamp.slice(0, 4)}`
  },
}

export const DefaultFormatString = {
  ISO: 'YYYY-MM-DDTHH:mm:ssZ',
  birthday: 'DD/MM/YYYY',
  shortDate: 'DD/MM/YYYY',
  longDate: 'dddd, DD/MM/YYYY',
}

export function format({ date, formartString }: any) {
  return moment(date).format(formartString)
}

export function getTimeInMilis(date?: any) {
  return moment(date).utc().valueOf()
}

export function startOfDay(date?: any) {
  return moment(date).startOf('day')
}

/**
 * @param {any} date
 * @returns {{start: number, end: number}}
 */
// export function rangeOfDay(date?: any) {
//   const mDay = moment(date)
//   const startDay = mDay.startOf('day')
//   let range = { start: startDay.valueOf() }
//   const endDay = startDay.add(1, 'd').startOf('day')
//   range.end = endDay.valueOf()
//   return range
// }
