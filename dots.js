
function dataMaker(array) {
	for(i = 0; i < 30; i++) {
		array.push(i);
	}
}
dataArray = [];
dataMaker(dataArray);
function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
}
let w = window.innerWidth;
let h = window.innerHeight;
var canvas = d3.select(".site-wrapper-inner")
			.append("svg")
			.attr("width", w)
			.attr("height", h);
var circles = canvas.selectAll("circle")
			.data(dataArray)
			.enter()
				.append("circle")
				.attr("r", 25)
				.attr("cx", function(d) {return (Math.random() * w)})
				.attr("cy", function(d) {return (Math.random() * h)})
				.attr("fill", getRandomColor())
				.attr("id", function(d) {return "dot" + d});
var clickCircle = d3.select("#dot1")
				.attr("fill", getRandomColor())
clickCircle.on("click", function() {
	circles.transition()
	.duration(1000)
	.attr("cx", function(d) {return (Math.random() * w)})
	.attr("cy", function(d) {return (Math.random() * h)})
	.attr("fill", getRandomColor());
	clickCircle.transition()
	.duration(1000)
	.attr("cx", function(d) {return (Math.random() * w)})
	.attr("cy", function(d) {return (Math.random() * h)})
	.attr("fill", getRandomColor());
});
