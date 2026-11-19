//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const episodeOne = episodeList[0];
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  const {
    name,
    season,
    number,
    image: { medium },
    summary,
  } = episodeOne;
  const episodeCode =
    `S` +
    String(season).padStart(2, "0") +
    `E` +
    String(number).padStart(2, "0");
  // Verify each component is displayed properly (strings, links, episodeCode is formatted correctly etc)
  console.log(name);
  console.log(season);
  console.log(number);
  console.log(medium);
  console.log(summary);
  console.log(episodeCode);
}

/*
episode name
season number
episode number
(seasonepisodecode)
med size image for episode
summary text for episode

*/

window.onload = setup;
