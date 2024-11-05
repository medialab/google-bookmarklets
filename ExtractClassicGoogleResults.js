javascript:(function(){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://medialab.github.io/SearchEnginesBookmarklet/SearchEnginesBookmarklet.js';
  var bod = document.getElementsByTagName('body')[0];
  bod || (bod = document.createElement('body'), document.documentElement.appendChild(bod));
  bod.appendChild(script);
})()
