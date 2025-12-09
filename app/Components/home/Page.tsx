
export default function Home() {
    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark" />

                <div className="relative z-10 max-w-4xl px-4 text-center">
                    <span className="block mb-4 font-semibold tracking-wider uppercase text-brand-blue">
                        December 12-14, 2025 • Colombo & Dubai
                    </span>
                    <h1 className="mb-6 text-6xl font-extrabold leading-tight md:text-8xl">
                        INNOVATION <br />
                        <span className="text-transparent bg-clip-text bg-brand-gradient">CONFERENCE</span>
                    </h1>
                    <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
                        Shaping the future of technology and design across global borders. Join the industry leaders.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 font-bold transition bg-white rounded-full text-brand-dark hover:bg-gray-200">
                            View Packages
                        </button>
                        <button className="px-8 py-3 font-bold transition border rounded-full border-white/20 hover:bg-white/10">
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-brand-card">
                <div className="grid grid-cols-1 gap-8 mx-auto text-center max-w-7xl md:grid-cols-3">
                    {[
                        { label: "Global Attendees", value: "200K+" },
                        { label: "World Class Speakers", value: "50+" },
                        { label: "Workshops", value: "300+" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <h3 className="mb-2 text-5xl font-bold text-transparent bg-clip-text bg-brand-gradient">{stat.value}</h3>
                            <p className="text-sm tracking-widest text-gray-400 uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}