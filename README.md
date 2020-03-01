# Car Search API 
* Used a Marketcheck Car Search API to find out the avaliable dealers around the 10km region of the user based on the user's input for model, year and make of the car that they are looking for. 
* The API search also calculates the average price that is offered by that particular dealership along with the respective VIN number for each car. 

## Getting Started
### Instructions:

* While downloading the project folder make sure that your files are in the same directory
* Run the HTML file
* Input the values for manufacturer (Ex. ford), model(Ex. F-150) and year(Ex. 2005)
* Select the city from the options provided and click 'search'.
* The result will be displayed in a list format
* Click 'Clear' to start over again

>Note: If you click submit and nothing shows up then that means no results where found based on your input. In that case, you will just have to change your input and try again. 

#### Sample Input that works: 
Manufacturer: ford, Model: F-150, City: Las Vegas and Year: 2005

### Acknowledgement and More information:
* The API key was retrived from (https://www.marketcheck.com/automotive)

>Following table shows a sample of Params that were used to retrive a GET link from postman

|Key   |Value    |
|------|---------|
|api_key| 0LsOTGGeIVL5MsvXVfKOWMf1HOl47W1D|
|Radius|10000|
|City| Las Vegas|
|year| 2004|
|make| ford|
|mode| F-150|

Host: marketcheck-prod.apigee.net

## Authors
* Arsh Lalani - 2nd year Software Engineering Student at The University of Western Ontarion, London


