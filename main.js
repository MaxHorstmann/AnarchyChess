;(function () {

  function init () {
    var config = {
        draggable: true,
        dropOffBoard: 'snapback', // this is the default
        showNotation: false,
        position: 'start'
    }
    var board = Chessboard('myBoard', config)
  }

  $(document).ready(init)

})()




