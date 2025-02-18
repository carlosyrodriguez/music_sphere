'use client';

export default function SignUpPage() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <Button onClick={() => signIn("spotify")} className="px-6 py-3 rounded-xl">
            Sign up with Spotify
        </Button>
        </div>
    );
}