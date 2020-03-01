
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('cars');
var api = 'https://marketcheck-prod.apigee.net/v1/search?';
var api_key= 'api_key=0LsOTGGeIVL5MsvXVfKOWMf1HOl47W1D';
var radius= '&radius=10000';
var city = '&city=Las Vegas';
var make = '&make=ford';
var model = '&model=Freestar';
var year = '&year=2004';


var newCity;
function displayResult()
{
make = '&make='+document.getElementById('make').value;
model = '&model='+document.getElementById('model').value;
year = '&year='+document.getElementById('year').value;

newCity= document.getElementById('city');
city = '&city='+newCity.options[newCity.selectedIndex].text;

var url = api+api_key+radius+city+year+make+model; 
 fetch(url)
.then((resp) => resp.json())
.then(function(data) 
 {
    console.log(data);
    var cars = data.listings;
    return cars.map(function(cars) 
    {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
    
       // img.src = cars.media.photo_links[0];
        span.innerHTML = `Car Dealer: ${cars.dealer.name},  Average Price: ${cars.price}, City: ${cars.dealer.city}, VIN: ${cars.vin}, Model: ${cars.build.model}` ;
        append(li,img);
        append(li, span);
        append(ul, li);
    })
 })
.catch(function(error) {
  console.log(JSON.stringify(error));
});

}



