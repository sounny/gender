var AppClass = function() {
  var appstate = {
    target: 'confetti-holder',
    max: 1000,
    size: 1,
    animate: true,
    props: ['circle', 'square', 'triangle', 'line', {type:'svg', src:'hat.svg', weight: 0.2, size: 25}],
    colors: [[26,42,120],[129,149,249],[54,87,247],[43,69,199]],
    clock: 25,
    rotate: false,
    width: window.innerWidth,
    height: window.innerHeight,
    start_from_edge: false,
    respawn: true
  };

  

  var confetti = null;


  };


    appstate.colors = '['+document.getElementById('colors').value+']';
    appstate.colors = JSON.parse(appstate.colors);

    appstate.animate = document.getElementById('animate').checked;

    appstate.start_from_edge = document.getElementById('start_from_edge').checked;

    appstate.respawn = document.getElementById('respawn').checked;

    appstate.rotate = document.getElementById('rotate').checked;

    document.getElementById('json-output').innerHTML = JSON.stringify(appstate);
  };
  //

  var render = function() {
    if(confetti)
      confetti.clear();
    confetti = new ConfettiGenerator(appstate);
    confetti.render();
  };

  var start = function() {
    render();
  };

  var clear = function() {
    confetti.clear();
  }

  return {
    start: start,
    clear: clear,
    render: render
  };
}

///

var app = null;

window.onload = function(){
  app = new AppClass();
  app.start();
}
