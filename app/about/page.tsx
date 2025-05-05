import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-penn-blue via-berkeley-blue to-indigo-dye pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12 text-white">
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Us – Carbon Neutro</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-indigo-300">
              Empowering Sustainable Efficiency
            </h2>
            <p className="text-lg leading-relaxed">
              Transforming energy management for Commercial, Industrial, and Institutional buildings. Our cloud-based
              IoT platform delivers a data-driven solution to monitor, manage, own and optimize energy use. We help
              businesses reduce costs, lower their carbon footprint, and meet sustainability goals. We help enterprises
              to shift from CapEx to Opex
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/10 hover:bg-white/20 transition-colors border-none text-white">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                We aim for a world where every building runs efficiently, waste is minimized, and organizations thrive
                while protecting the planet.
              </p>
            </Card>

            <Card className="p-6 bg-white/10 hover:bg-white/20 transition-colors border-none text-white">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Our goal is simple: To help businesses lower energy costs, reduce emissions, and improve operational
                efficiency. With real-time insights and scalable solutions, we enable smarter, more sustainable energy
                decisions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

