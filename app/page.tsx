import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">Authentication and User Profile example</h1>

          <div className="flex flex-col items-center gap-4 pt-8">
            <Link href="/login" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
              Sign Up
            </Link>
            <Link href="/profile" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
              User Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
