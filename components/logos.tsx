export function Logos() {
  return (
    <section className="mt-16">
      <div className="container-max">
        <div className="glass rounded-2xl p-8 md:p-10 bg-white/5">
          <div className="text-center text-sm text-zinc-400">Empresas que confían en nosotros</div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-opacity opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


