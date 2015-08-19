if (Meteor.isClient) {

  Template.converter.events({
    'click button': function () {
      canvas = document.getElementById('canvas');
      context = canvas.getContext('2d');
      x = 0;
      y = 0;
      width = canvas.width;
      height = canvas.height;
      context.clearRect(x, y, width, height);

      var fbPic = new Image();
      fbPic.crossOrigin = "Anonymous";
      fbPic.src = document.getElementById("url").value;
      fbPic.onload = function() {
        context.drawImage(fbPic, x, y, width, height);
        drawText();
      };
      
      var drawText = function() {
        context.globalCompositeOperation = 'color-dodge';
        context.fillStyle = document.getElementById("html5colorpicker").value;
        context.textAlign = "center";
        context.font = "bold 80px Copperplate Gothic";
        context.fillText("Letters Today", canvas.width/2, 100);
        context.fillText("Leaders Tomorrow", canvas.width/2, 180);
        context.font = "bold 150px Copperplate Gothic";
        context.fillText("MIT Greek", canvas.width/2, canvas.height-60);
      }

      /*
      var goAXO = new Image();
      goAXO.src = 'goGREEK.png';
      goAXO.onload = function() {
        context.globalCompositeOperation = 'color-dodge';
        context.drawImage(goAXO, x, y, width, height);
      };
      */
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
