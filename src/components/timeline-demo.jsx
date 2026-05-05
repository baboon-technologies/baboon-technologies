import { Timeline } from "./ui/timeline";
import { Rocket, TestTube, Award, TrendingUp, Briefcase } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content:
        "Primera ronda de inversión destinada a construir el MVP del algoritmo SVI, sentando las bases tecnológicas del proyecto.",
      icon: <Rocket className="timeline-icon" />,
    },
    {
      title: "2023",
      content:
        "Nueva fase de financiación orientada a consolidar el equipo, ampliar el desarrollo tecnológico y reforzar la estructura de la compañía. Durante esta etapa, Baboon Technologies obtuvo también reconocimiento oficial como startup innovadora.",
      icon: <Award className="timeline-icon" />,
    },
    {
      title: "2024",
      content:
        "Inicio de la creación y tramitación regulatoria del fondo de inversión UCITS \"Systematic Value Investing US Markets\", estableciendo las bases de una estrategia sistemática con vocación internacional.",
      icon: <TestTube className="timeline-icon" />,
    },
    {
      title: "2025",
      content:
        "Consolidación del proyecto con una base creciente de clientes y activos bajo gestión, respaldada por un historial de rentabilidad auditado con capacidad de superar al benchmark.",
      icon: <TrendingUp className="timeline-icon" />,
    },
  ];

  return (
    <div className="timeline-demo">
      <Timeline data={data} />
    </div>
  );
}
