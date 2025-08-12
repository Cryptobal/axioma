import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="container-max">
        <div className="glass rounded-2xl px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-lg font-medium">Axima</div>
              <p className="text-sm text-zinc-400 mt-2">Software a medida con IA</p>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-200">Navegación</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><Link href="/servicios">Servicios</Link></li>
                <li><Link href="/industrias">Industrias</Link></li>
                <li><Link href="/casos">Casos</Link></li>
                <li><Link href={"/quienes-somos" as any}>Quiénes Somos</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-200">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><Link href="/terminos">Términos</Link></li>
                <li><Link href="/privacidad">Privacidad</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-medium text-zinc-200">Redes</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-xs text-zinc-500">© {new Date().getFullYear()} Axima. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  )
}


