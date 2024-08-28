import { DateTime } from 'luxon';

class DateFormatter {
  _inputHandler(inputDate) {
    return /^-?[0-9]+$/.test(inputDate) ? parseInt(inputDate, 10) * 1000 : inputDate;
  }

  _isInputInvalid(inputDate) {
    const date = new Date(this._inputHandler(inputDate));
    return Number.isNaN(date.getTime());
  }

  _getDateTimeWithLocale(inputDate) {
    const date = new Date(this._inputHandler(inputDate));
    return DateTime.fromISO(date.toISOString()).setLocale(navigator.language);
  }

  formatDayMonthYearTimeShort(inputDate) {
    if (this._isInputInvalid(inputDate)) {
      return 'Invalid date';
    }
    return this._getDateTimeWithLocale(inputDate).toLocaleString(DateTime.DATETIME_MED);
  }

  convertISODate(isoString) {
    return `${isoString.substr(0, 4)}-${isoString.substr(4, 2)}-${isoString.substr(
      6,
      2,
    )}T${isoString.substr(8, 2)}:${isoString.substr(10, 2)}:${isoString.substr(12, 2)}.000Z`;
  }
}

export default new DateFormatter();
