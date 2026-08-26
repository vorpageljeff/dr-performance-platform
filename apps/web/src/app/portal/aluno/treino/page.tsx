import type { Metadata } from "next";

import { PageHeading } from "@/components/portal/page-heading";

export const metadata: Metadata = { title: "Meu treino" };

const exercises = [
  { name: "Agachamento livre", sets: "4 × 8", rest: "90 s", note: "Descer com controle e manter os joelhos alinhados." },
  { name: "Levantamento terra romeno", sets: "3 × 10", rest: "90 s", note: "Quadril para trás, coluna neutra e amplitude confortável." },
  { name: "Leg press 45°", sets: "3 × 12", rest: "75 s", note: "Não retirar o quadril do banco no final da descida." },
  { name: "Afundo com halteres", sets: "3 × 10", rest: "60 s", note: "Repetições por perna. Priorize estabilidade." },
  { name: "Panturrilha em pé", sets: "4 × 15", rest: "45 s", note: "Pausa de um segundo no topo do movimento." },
];

export default function WorkoutPage() {
  return <><PageHeading eyebrow="Plano vigente • Versão 3" title="Treino A" description="Força de membros inferiores e estabilidade. Publicado por Daniel em 18 de agosto." action={<button className="button" disabled type="button">Iniciar treino em breve</button>} /><div className="workout-overview"><div><span>Duração estimada</span><strong>55 min</strong></div><div><span>Exercícios</span><strong>7</strong></div><div><span>Intensidade</span><strong>Moderada</strong></div><div><span>Última execução</span><strong>24 ago.</strong></div></div><section className="exercise-list"><header><div><span className="app-card__kicker">Sequência do treino</span><h2>Exercícios programados</h2></div><span>5 de 7 exibidos no protótipo</span></header>{exercises.map((exercise, index) => <article key={exercise.name}><span className="exercise-number">{String(index + 1).padStart(2, "0")}</span><div className="exercise-info"><h3>{exercise.name}</h3><p>{exercise.note}</p></div><div className="exercise-prescription"><span>Séries × repetições<strong>{exercise.sets}</strong></span><span>Descanso<strong>{exercise.rest}</strong></span></div><button aria-label={`Ver instruções de ${exercise.name}`} disabled type="button">→</button></article>)}</section><aside className="safety-card"><strong>Sentiu dor ou desconforto?</strong><p>Interrompa o exercício e registre a ocorrência. Daniel receberá um alerta antes da próxima orientação.</p><button disabled type="button">Registrar ocorrência em breve</button></aside></>;
}
