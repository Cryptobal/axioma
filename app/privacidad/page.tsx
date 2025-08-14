import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacidad | LX3',
  alternates: { canonical: '/privacidad' },
}
import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <div>
      <PageHeader title="Política de privacidad" subtitle="Cómo recolectamos, usamos y protegemos tus datos." />
      <div className="container-max">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>
          <div className="p-6 prose prose-invert">
            <h2>1. Responsable del tratamiento</h2>
            <p>LX3 es responsable del tratamiento de los datos personales recolectados a través de este sitio y durante la prestación de servicios.</p>
            <h2>2. Datos recolectados</h2>
            <p>Recolectamos datos de contacto (nombre, email, empresa), información provista en formularios y datos técnicos mínimos (IP anonimizada, páginas visitadas) para fines de analítica.</p>
            <h2>3. Finalidades</h2>
            <ul>
              <li>Responder consultas y gestionar solicitudes comerciales.</li>
              <li>Prestar y mejorar nuestros servicios.</li>
              <li>Analítica de uso y seguridad.</li>
            </ul>
            <h2>4. Base legal</h2>
            <p>Consentimiento del titular, ejecución de un contrato y legítimo interés en mejorar el servicio.</p>
            <h2>5. Conservación</h2>
            <p>Conservamos los datos por el tiempo necesario para cumplir las finalidades o exigencias legales aplicables.</p>
            <h2>6. Compartición</h2>
            <p>Podemos compartir datos con proveedores de infraestructura (hosting, analítica, correo) bajo contratos de tratamiento y obligaciones de confidencialidad.</p>
            <h2>7. Derechos</h2>
            <p>Puedes ejercer tus derechos de acceso, rectificación, actualización y eliminación escribiendo a hola@lx3.ai. Atenderemos tu solicitud dentro de plazos razonables.</p>
            <h2>8. Seguridad</h2>
            <p>Aplicamos prácticas de seguridad técnica y organizativa (cifrado en tránsito, control de accesos, registros de auditoría). El cliente es responsable de la información que nos provee y de su uso adecuado.</p>
            <h2>9. Cookies</h2>
            <p>Usamos cookies necesarias y analíticas. Puedes configurar tu navegador para bloquearlas; algunas funciones podrían verse afectadas.</p>
            <h2>10. Transferencias internacionales</h2>
            <p>Si corresponde, garantizamos mecanismos adecuados (cláusulas contractuales estándar u otros) para transferencias fuera de tu país.</p>
            <h2>11. Cambios</h2>
            <p>Podemos actualizar esta política; indicaremos la fecha de última modificación.</p>
            <h2>12. Contacto</h2>
            <p>Para privacidad: hola@lx3.ai</p>
          </div>
        </div>
      </div>
    </div>
  )
}


