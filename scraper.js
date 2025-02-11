const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const BILLBOARD_URL = "https://www.billboard.com/charts/hot-100/";

async function scrapeBillboard() {
  try {
    const { data } = await axios.get(BILLBOARD_URL);
    const $ = cheerio.load(data);
    let songs = [];

    $(".o-chart-results-list-row").each((index, element) => {
      const title = $(element).find("h3").first().text().trim();
      const artist = $(element).find("li span").first().text().trim();
      const cover = $(element).find("img").attr("src");

      if (title && artist) {
        songs.push({ rank: index + 1, title, artist, cover });
      }
    });

    return songs;
  } catch (error) {
    console.error("Error scraping Billboard:", error);
    return [];
  }
}

// API Endpoint
app.get("/api/billboard", async (req, res) => {
  const songs = await scrapeBillboard();
  res.json(songs);
});

// Start server
const PORT = process.env.PORT || 4314;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
