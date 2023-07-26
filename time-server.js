const net = require('net')

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }
  
function date () {
    const d = new Date()
    return d.getFullYear() + '-' +
      zeroFill(d.getMonth() + 1) + '-' +
      zeroFill(d.getDate()) + ' ' +
      zeroFill(d.getHours()) + ':' +
      zeroFill(d.getMinutes())
  }
const server = net.createServer(function (socket) {
       socket.write(date()+"\n");
       socket.end();
     })
     server.listen(process.argv[2])


     //"2013-07-06 17:42"