let apiKey = `Kob1wpMSRIrIGgB5op2GQZRcB1AgzuEm`;

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("input_button").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=`;
    let str = document.querySelector("#input_text").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("META", console.log(content.meta));
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let figCap = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fig.textContent = content.data[0].title;
        fig.appendChild(figCap);
        fig.appendChild(img);

        let out = document.querySelector(".output");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#input_text").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
