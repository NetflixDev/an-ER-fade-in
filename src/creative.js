// how long fade-in takes (in seconds)
var fadeDuration = 1.5;

// how long zoom animates for (in seconds)
var zoomDuration = 1.7;

// how much to scale the keyart intro frame
var zoomAmount = 5;

var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');
    TweenLite.set(View.endFrame, { alpha: 0 });
  };

  this.play = function() {
    console.log('Creative.play()');
    var delay = 0;
    TweenLite.fromTo(View.endFrame, fadeDuration, { alpha: 0 }, { alpha: 1, delay: delay });

    TweenLite.delayedCall(delay, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// attaching to Creative class since container looks there for intro zoom properties
Creative.zoomDuration = zoomDuration;
Creative.zoomAmount = zoomAmount;
