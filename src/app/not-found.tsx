import estilos from "./not-found.module.css";
import { Metadata } from "next";

// src/app/not-found.tsx
export const metadata: Metadata = {
  title: "Página não encontrada | PetShop",
  robots: "no index",
};

export default function Pagina404() {
  return (
    <section className={estilos.conteudo}>
      <h2>Ops! Página não encontrada!</h2>
    </section>
  );
}
