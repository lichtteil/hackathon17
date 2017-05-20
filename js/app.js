

requirejs.config({
    "baseUrl": "https://rawgit.com/lichtteil/hackathon17/master/js/lib",
    "paths": {
      "app": "https://rawgit.com/lichtteil/hackathon17/master/js/app",
      "jquery": "https://code.jquery.com/jquery-3.2.1.min",
      "simpleCart": "https://rawgit.com/lichtteil/hackathon17/master/js/lib/simpleCart.min",
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);