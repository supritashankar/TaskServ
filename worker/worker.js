onmessage = function(e) {
  setTimeout(function(){
    var workerResult = 'Hello ' + (e.data);
    postMessage(workerResult);
  },0);
}
