export default async function handler(req, res) {
    const auth = Buffer.from(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
    ).toString('base64');

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${auth}`,
        },
        body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    console.log("Access Token Response:BQCHxEt09tEiOzkkCuTMee6byuzwz086Dkw2iNP0ii4Tx4uO4ZSgGT4KGnZif2KARODKozup0BuaGl6pawhZUzadc77zNDrn0cvltVEgy9Z66bPULpYbUpkL2RrwYaXQ_WhZ7TC6-aE", data);  // Log the response from Spotify
    
    if (data.access_token) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ error: 'Failed to retrieve access token' });
    }
}
