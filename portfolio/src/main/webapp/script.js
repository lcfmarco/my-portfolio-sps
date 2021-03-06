// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['“I Saved Latin! What Did You Ever Do?” – Max from Rushmore', '"Not quite my tempo." - Terence Fletcher from Whiplash',
       '"We were happy here, for a little while." - Zero from The Grand Budapest Hotel', '"Slay!" - Nyx'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function showQuote() {
    const responseFromServer = await fetch('/MovieQuotes');
    const textFromResponse = await responseFromServer.json();
    const helloContainer = document.getElementById('quote-container');
    const quote = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];
    helloContainer.innerText = quote;

    //console.log();
}

function createMap() {
    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 37.422, lng: -122.084}, zoom: 16});    
}


