const florida = document.getElementById("Florida");
const newYork = document.getElementById("NewYork");
const losangeles = document.getElementById("losangeles");
const sandiego= document.getElementById("sandiego");
const dc = document.getElementById("dc");
const vegas = document.getElementById("vegas");
const alaska = document.getElementById("alaska");
const hawaii = document.getElementById("hawaii");
const homePanel = document.getElementById("city");
const adventure= document.getElementById("link");
const attraction = document.getElementById("attractions");
const shop = document.getElementById("shop");
const food = document.getElementById("restaurant");
const stay = document.getElementById("stay");



function changeCityName(city){
   homePanel.innerHTML=(city);
}
florida.addEventListener("click",function(){
	changeCityName("Florida");
	adventure.setAttribute('href',"https://www.viator.com/Florida-tours/Outdoor-Activities/d276-g9");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/florida-usfl.htm");
	shop.setAttribute('href',"https://www.visitflorida.com/en-us/things-to-do/shopping/florida-shopping-malls-outlets.html");
	food.setAttribute('href',"https://www.onlyinyourstate.com/florida/restaurant-bucket-list-fl/");
	stay.setAttribute('href',"https://www.booking.com/region/us/florida.html");
});
newYork.addEventListener("click",function(){
	changeCityName("NewYork");
	adventure.setAttribute('href',"https://www.getyourguide.com/new-york-city-l59");
	attraction.setAttribute('href',"https://www.timeout.com/newyork/attractions/new-york-attractions");
	shop.setAttribute('href',"https://loving-newyork.com/shopping-in-new-york/");
	food.setAttribute('href',"https://www.thrillist.com/eat/new-york/most-famous-nyc-restaurants");
	stay.setAttribute('href',"https://www.booking.com/city/us/new-york.html");
});
losangeles.addEventListener("click",function(){
	changeCityName("Los Angeles");
	adventure.setAttribute('href',"https://www.viator.com/Los-Angeles-tours/Outdoor-Activities/d645-g9");
	attraction.setAttribute('href',"https://theculturetrip.com/north-america/usa/california/articles/20-must-visit-attractions-in-los-angeles/");
	shop.setAttribute('href',"https://www.discoverlosangeles.com/things-to-do/discover-the-best-shopping-centers-in-los-angeles");
	food.setAttribute('href',"https://la.eater.com/maps/best-los-angeles-restaurants-eater-38-essential");
	stay.setAttribute('href',"https://www.booking.com/city/us/los-angeles.html");
});
sandiego.addEventListener("click",function(){
	changeCityName("San Diego");
	adventure.setAttribute('href',"https://www.viator.com/San-Diego-tours/Outdoor-Activities/d736-g9");
	attraction.setAttribute('href',"https://www.thecrazytourist.com/top-25-things-to-do-in-san-diego/");
	shop.setAttribute('href',"https://www.sandiego.org/articles/shopping/list-of-outlet-malls-and-shopping-centers-in-san-diego.aspx");
	food.setAttribute('href',"https://www.thrillist.com/eat/san-diego/best-restaurants-san-diego");
	stay.setAttribute('href',"https://www.booking.com/city/us/san-diego.html");
});
dc.addEventListener("click",function(){
	changeCityName("Washington DC");
	adventure.setAttribute('href',"https://www.viator.com/Washington-DC/d657-ttd");
	attraction.setAttribute('href',"https://washington.org/things-do-washington-dc");
	shop.setAttribute('href',"https://washington.org/dc-guide-to/dcs-shopping-districts");
	food.setAttribute('href',"https://washington.org/visit-dc/hot-new-restaurants-try-now-washington-dc");
	stay.setAttribute('href',"https://www.booking.com/city/us/washington.html");
});
vegas.addEventListener("click",function(){
	changeCityName("Las Vegas");
	adventure.setAttribute('href',"https://www.viator.com/Las-Vegas/d684-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions-/las-vegas-us-nv-lv.htm");
	shop.setAttribute('href',"https://www.lavishvegas.com/news/7-best-places-go-shopping-las-vegas-12676.html");
	food.setAttribute('href',"https://vegas.eater.com/maps/best-restaurants-las-vegas-38-map");
	stay.setAttribute('href',"https://www.booking.com/city/us/las-vegas.html");
});
alaska.addEventListener("click",function(){
	changeCityName("Alaska");
	adventure.setAttribute('href',"https://www.viator.com/Alaska/d270-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/alaska-usak.htm");
	shop.setAttribute('href',"https://www.alaska.org/destination/anchorage/shopping-malls");
	food.setAttribute('href',"https://www.alaska.org/dining-and-nightlife");
	stay.setAttribute('href',"https://www.booking.com/region/us/alaska.html");
});
hawaii.addEventListener("click",function(){
	changeCityName("Hawaii");
	adventure.setAttribute('href',"https://www.viator.com/Hawaii/d278-ttd");
	attraction.setAttribute('href',"https://www.planetware.com/tourist-attractions/hawaii-ushi.htm");
	shop.setAttribute('href',"https://www.best-of-oahu.com/shopping-on-oahu.html");
	food.setAttribute('href',"https://www.onlyinyourstate.com/hawaii/famous-restaurants-worth-waiting-for-hi/");
	stay.setAttribute('href',"https://www.booking.com/region/us/hawaii.html");
});

