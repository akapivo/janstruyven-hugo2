const collection = document.getElementsByClassName("randomimg");
// If randomimgs found?
if (collection.length > 0) {
  var imgurls = [];
  for (let i = 0; i < collection.length; i++) {
    imgurls.push(collection[i].getAttribute('data-src'));
  }
  var randomitem = imgurls[Math.floor(Math.random()*imgurls.length)];
  console.log(randomitem);

  document.getElementById('randomslide').style.backgroundImage = 'url(' + randomitem + ')';

}

