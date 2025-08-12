import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <div>
      <PageHeader title="Términos y condiciones" subtitle="Condiciones de uso del sitio y de nuestros servicios." />
      <div className="container-max">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>
          <div className="p-6 prose prose-invert">
            <h2>1. Aceptación</h2>
            <p>Al utilizar este sitio o contratar nuestros servicios, aceptas estos Términos y nuestra Política de Privacidad. Si no estás de acuerdo, por favor no utilices el sitio.</p>
            <h2>2. Servicios</h2>
            <p>Prestamos servicios de consultoría, desarrollo e integración de software. Las propuestas comerciales definen alcance, entregables, plazos y precios. Cualquier cambio de alcance será presupuestado y acordado por escrito.</p>
            <h2>3. Propiedad intelectual</h2>
            <p>El código, documentación y entregables desarrollados para el cliente serán de su propiedad una vez recibido el pago total acordado, salvo licencias de terceros. Nuestro material preexistente y know-how permanecen como propiedad de Axima.</p>
            <h2>4. Confidencialidad</h2>
            <p>Ambas partes se comprometen a mantener confidencial la información no pública a la que accedan durante la relación comercial, por un periodo mínimo de cinco (5) años.</p>
            <h2>5. Datos y seguridad</h2>
            <p>Adoptamos medidas razonables de seguridad técnica y organizacional. El cliente es responsable por la exactitud y licitud de los datos que nos provea.</p>
            <h2>6. Niveles de servicio</h2>
            <p>Los niveles de servicio (SLAs) y soporte se detallan en el acuerdo específico. Salvo pacto distinto, el tiempo de respuesta estándar es de 24–48h hábiles.</p>
            <h2>7. Limitación de responsabilidad</h2>
            <p>En la máxima medida permitida por la ley, nuestra responsabilidad total se limita al monto efectivamente pagado por los servicios en los últimos doce (12) meses. No respondemos por lucro cesante ni daños indirectos.</p>
            <h2>8. Cumplimiento y uso aceptable</h2>
            <p>Los servicios no deben usarse para actividades ilícitas, infractoras o que vulneren privacidad. El cliente garantiza que cuenta con las autorizaciones necesarias para los datos y sistemas integrados.</p>
            <h2>9. Vigencia y terminación</h2>
            <p>Cualquiera de las partes podrá terminar el servicio por incumplimiento fundamental, previa notificación escrita y otorgando un plazo razonable de subsanación.</p>
            <h2>10. Ley aplicable</h2>
            <p>Estos términos se rigen por las leyes del país de constitución de Axima, salvo acuerdo distinto en el contrato particular.</p>
            <h2>11. Contacto</h2>
            <p>Para consultas legales: contacto@axima.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}


