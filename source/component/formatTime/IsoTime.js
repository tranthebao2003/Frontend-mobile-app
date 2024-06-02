
import moment from 'moment'
export default (timeIso) => {
  return (formatUpdateAt = moment(timeIso).format("DD/MM/YYYY"));
};