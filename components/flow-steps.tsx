import { cn } from '@/lib/utils'
import { CheckCircle2, FileText, GitPullRequest, Link2, ServerCog, Send } from 'lucide-react'

type Step = { title: string; desc: string; icon: React.ComponentType<any> }

const DEFAULT_STEPS: Step[] = [
  { title: 'Captura', desc: 'Ingesta desde formularios, planillas o APIs.', icon: FileText },
  { title: 'Validación', desc: 'Reglas de negocio y limpieza de datos.', icon: CheckCircle2 },
  { title: 'Aprobación', desc: 'Flujos en Slack/Email con trazabilidad.', icon: GitPullRequest },
  { title: 'Integración', desc: 'Escritura a ERP/CRM mediante APIs/webhooks.', icon: Link2 },
  { title: 'Automatización', desc: 'Workers/LLMs para tareas repetitivas.', icon: ServerCog },
  { title: 'Alerta/Reporte', desc: 'Notificaciones y KPIs actualizados.', icon: Send },
]

export function FlowSteps({ steps = DEFAULT_STEPS, className }: { steps?: Step[]; className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
        {steps.map((s) => (
          <div key={s.title} className="relative rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 dark:border-zinc-50/10 dark:bg-zinc-50/5">
            <div className="flex items-center gap-2">
              <s.icon className="size-5 text-primary" />
              <div className="font-medium text-sm">{s.title}</div>
            </div>
            <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


