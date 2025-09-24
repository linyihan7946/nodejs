function dateFormat(dtStr) {
  const dt = new Date(dtStr);
  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());
  const h = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const s = padZero(dt.getSeconds());
  return `${y}-${m}-${d} ${h}:${mm}:${s}`;
}

// 补零
function padZero(n) {
  return n > 9 ? n : '0' + n;
}

module.exports = {
  dateFormat
}