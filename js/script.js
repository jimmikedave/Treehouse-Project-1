//Created an array of 5 quotes containing quote, source, citation, and year properties.
var quotes = [
{
  quote: 'You only live as long as the last person who remembers you.',
  source: 'Akecheta',
  citation: 'Westworld'
},
{
  quote: `I'm not a follower. I'm a leader. And anyone who speaks their mind is always criticized.`,
  source: 'Tyler, the Creator',
  year: 2013
},
{
  quote: 'Live your life, live it right. Be different, do different things.',
  source: 'Kendrick Lamar'
},
{
  quote: 'I think that inside every adult is the heart of a child. \
  We just gradually convince ourselves that we have to act more like adults.',
  source: 'Shigeru Miyamoto',
  tags: 'Gaming'
},
{
  quote: `We all live day to day completely oblivious to the fact \
  that we're a part of a much larger and stranger reality than we can \
  possibly imagine.` ,
  source: 'Blake Crouch'
}
];

//Generates a random quote by generating a random number into the array.
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * 5);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
};


/*Creates a string of HTML to print the quote and source.
If an object contains a citation, tags, or year property they will print as well.
If not, the object will print just the quote and source.*/
function printQuote(){
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if (randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span></p>`;
  } else if (randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span></p>`;
  } else if (randomQuote.tags) {
    html += `<span class="tags">${randomQuote.tags}</span></p>`;
  }else{
    html += `</p>`;
  }
  //Allows the page to generate a new quote when the button is clicked.
  document.getElementById('quote-box').innerHTML = html;
return html;
};


//Creates a random number for the color scale.
function randomRGB(){
  return Math.floor(Math.random() * 256)
}
//Creates a random color by selecting 3 random color settings.
function randomColor(){
  var color = `rgb( ${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  return color;
}
//Applies the random color to the background when called.
function change(){
var colorChange = randomColor();
document.body.style.backgroundColor = colorChange;
return colorChange;
}

//Loads a new quote every 10 seconds.
setInterval(printQuote, 10000);
//Loads a new color every 10 seconds.
setInterval(change, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Uses the change function to load a new background color each time the button is "clicked"
document.getElementById('load-quote').addEventListener("click", change, false);

///////////////////////////////////////////////////////////////////

let i = 1;

for(i = 0; i < 2; i ++){
  console.log(i)
}

console.log(i)