let getTimeStick = function (isoTime) {
  let temp = isoTime.replace(/-/g, '/').replace(/T/g, ' ');
  let ts = Date.parse(temp.slice(0, temp.length - 1));
  return ts;
}

let getGapTime = function (time) {
  var clientTime = getTimeStick(time);
  var d = new Date();
  var n = d.toISOString();
  var serverTime = getTimeStick(n)                   // 妈的这个ISO 时间戳只有一个方向的转换，只能把客户端和服务端用同一种办法来处理了

  return Math.abs((clientTime - serverTime)/1000)
}

module.exports = getGapTime