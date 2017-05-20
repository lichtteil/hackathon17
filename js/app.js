

requirejs.config({
    "baseUrl": "http://hackathon.lichtteil.de/js/lib",
    "paths": {
      "app": "http://hackathon.lichtteil.de/js/app",
      "jquery": "https://code.jquery.com/jquery-3.2.1.min"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);