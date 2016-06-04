function jsonFlickrFeed(o)
{
    var div = document.getElementById('photoBucket');
	var i = 0;
    while(o.items[i])
    {
        div.innerHTML += '<img class= "FlickerPhotos" src="' + o.items[i].media.m + '" alt="' + o.items[i].title +'">';
		i++;
    }
}
