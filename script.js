//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  for (const episode of episodeList) {
    const card = createEpisodeCard(episode);
    rootElem.appendChild(card);
  }
}

function createEpisodeCard(episode) {
  const { name, season, number, image, summary } = episode;
  const episodeCode =
    `S` +
    String(season).padStart(2, "0") +
    `E` +
    String(number).padStart(2, "0");

  const templateElem = document.getElementById("template-card-episode");
  const cardClone = templateElem.content.cloneNode(true);
  cardClone.querySelector(".episode-name").textContent = name;
  cardClone.querySelector(".episode-code").textContent = episodeCode;
  if (image) {
    cardClone.querySelector(".episode-image").src = image.medium;
    cardClone.querySelector(".episode-image").alt = name;
  } else {
     cardClone.querySelector(".episode-image").style.display = "none";
  }
  if (summary) {
    cardClone.querySelector(".episode-summary").textContent = summary
      .replace("<p>", "")
      .replace("</p>", "");
  } else {
    cardClone.querySelector(".episode-summary").textContent =
      "No summary available";
  }

  return cardClone;
}

window.onload = setup;
