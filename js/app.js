

requirejs.config({
    "baseUrl": "https://hackathon.lichtteil.de/js/lib",
    "paths": {
      "app": "https://hackathon.lichtteil.de/js/app",
      "jquery": "https://code.jquery.com/jquery-3.2.1.min",
      "simpleCart": "https://hackathon.lichtteil.de/js/lib/simpleCart.min",
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);