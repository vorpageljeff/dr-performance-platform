import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <span className="state-page__code">404</span>
      <h1>Esta página não faz parte do treino.</h1>
      <p>O endereço pode ter mudado ou ainda não está disponível.</p>
      <Link className="button" href="/">
        Voltar ao início
      </Link>
    </main>
  );
}
