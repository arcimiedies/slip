$(function() {
  var $splash = $(".splash");
  var $blackout = $(".blackout");

  if ($splash[0].complete) {
    console.log("Immediate.");
    setTimeout(loadGame, 0);
  } else {
    console.log("Deferred.");
    $splash.on('load', loadGame);
  }

  function loadGame() {
    setTimeout(function() {
      $splash.css({display: 'block'}).animate({opacity: 1}, 500);
    }, 100);    
    var $script = $("<script>")
      .attr('type', 'text/javascript')
      .appendTo($("head"));
    $script
      .on('load', hideSplash)
      .attr('src', 'slipways.js');
  }

  function hideSplash() {
    var timeout = 4000;
    setTimeout(function() {
      $blackout.hide();
      $splash.animate({opacity: 0}, 500, 'linear', function() {
        $splash.css({display: 'none'});
      });
    }, timeout);
  }
});
