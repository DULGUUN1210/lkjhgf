var input = document.getElementsByTagName('input')[0];
var temp = document.querySelector('.temp')
var description = document.querySelector('.description')
var wind = document.querySelector('.wind')
function search(){	
var city = input.value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data =>{
		temp.innerText = data.main.temp+"c"; 
		description.innerText =data.weather[0].description+"c"; 
		wind.innerText =data.wind.speed+"c"; 
		console.log(data);
			console.log(data.main.temp);
			console.log(data.weather[0].main);
			console.log(data.weather[0].description);
			console.log(data.wind.speed);
			document.getElementsByTagName('img')[0].style.width="300px";
			switch(data.weather[0].main){
				case "sunny":
					document.getElementsByTagName('img')[0].src="sunny.png";
					break;
				case "rian":
					document.getElementsByTagName('img')[0].src="rian.png";
					break;	
				case "snow":
					document.getElementsByTagName('img')[0].src=".png";
					break;	
			}
		},
	);
}