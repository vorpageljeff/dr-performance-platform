"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="state-page">
      <span className="state-page__mark" aria-hidden="true">
        !
      </span>
      <h1>Não foi possível carregar esta etapa.</h1>
      <p>Tente novamente. Se o problema continuar, procure o atendimento.</p>
      <button className="button" onClick={reset} type="button">
        Tentar novamente
      </button>
    </main>
  );
}
