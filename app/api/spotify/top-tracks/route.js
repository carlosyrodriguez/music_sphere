export default async function handler(req, res) {
    try {
        const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/token`);
        if (!tokenRes.ok) throw new Error("Failed to fetch access token");
        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;

        const playlistId = '37i9dQZEVXbMDoHDwVN2tF'; // Top 50 Global
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!response.ok) {
            console.error("Spotify API Error:", await response.text());
            return res.status(response.status).json({ error: "Failed to fetch playlist" });
        }

        const data = await response.json();
        const tracks = data.items.map((item, index) => ({
            rank: index + 1,
            name: item.track.name,
            artist: item.track.artists.map((artist) => artist.name).join(', '),
            popularity: item.track.popularity,
            image: item.track.album.images[0]?.url,
        }));

        res.status(200).json(tracks);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function GET() {
    return new Response(JSON.stringify({ message: "API is working!" }), {
        headers: { "Content-Type": "application/json" },
    });
}