// Moment Script ID 1mu_lhnqMe2wuBC2U6t3JCevZm44UZ7DHGEGKMrhJ2EANO1JU1kTOSc8a

function toUtc(dateTime, timeZone) {
  var from = m.moment.tz(dateTime, timeZone);
  return from.tz("Etc/UTC").format('YYYY-MM-DD HH:mm:ss');
}

function toUTCZone(dateTime, fromTimeZone, toTimeZone) {
  var from = m.moment.tz(dateTime, fromTimeZone);
  return from.tz(toTimeZone).format('YYYY-MM-DD HH:mm:ss');
}

function toUTCBrowserZone(dateTime, fromTimeZone) {
  var from = m.moment.tz(dateTime, fromTimeZone);
  var toTimeZone = m.moment.tz.guess();
  return from.tz(toTimeZone).format('YYYY-MM-DD HH:mm:ss');
}

function toUTCFormat(dateTime, format, timeZone) {
  var from = m.moment.tz(dateTime, format, timeZone);
  return from.tz("Etc/UTC").format('YYYY-MM-DD HH:mm:ss');
}

