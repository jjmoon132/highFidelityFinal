/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

let choice = d3.select("#chartSelect").node().value;


d3.select("#chartSelect")
	.on("change", function change(){
        console.log("YOO")
		choice = d3.select('#chartSelect').node().value;
        document.getElementById("ageChart").style.display = "none";
        document.getElementById("raceChart").style.display = "none";
        document.getElementById("sexChart").style.display = "none";
        console.log(choice)
        if (choice == "age"){
            document.getElementById("ageChart").style.display = "block";
        }
        if (choice == "race"){
            document.getElementById("raceChart").style.display = "block";
        }
        if (choice == "sex"){
            document.getElementById("sexChart").style.display = "block";
        }
});



// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
