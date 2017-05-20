

requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "https://code.jquery.com/jquery-3.2.1.min"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);