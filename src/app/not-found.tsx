import Link from "next/link";
import estilos from "./not-found.module.css";
import { Metadata } from "next";
import Container from "@/components/Container";

// src/app/not-found.tsx
export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: "no index",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! Página não encontrada!</h2>
      <Container>
        <div className={estilos.imagem404}>
          <img
            src="/images/404.svg"
            alt="cachorrinho com cara triste e nariz vermelho com o símbolo de interrogação"
          />
          <p>
            <Link href="/">Voltar para a página inicial</Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
