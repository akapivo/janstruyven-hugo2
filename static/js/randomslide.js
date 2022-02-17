const collection = document.getElementsByClassName("randomimg");
// If randomimgs found?
if (collection.length > 0) {
  var imgurls = [];
  for (let i = 0; i < collection.length; i++) {
    imgurls.push(collection[i].getAttribute('data-src'));
  }
  var randomitem = imgurls[Math.floor(Math.random()*imgurls.length)];
  console.log('=> ' + randomitem);

  document.getElementById('randomslide').style.backgroundImage = 'linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.95)), url(' + randomitem + ')';
  document.getElementById('randomimg-sharp').style.backgroundImage = 'url(' + randomitem + ')';
}
