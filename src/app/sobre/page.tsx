// src/app/sobre/page.tsx
import estilos from "./sobre.module.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Informações sobre o petshop",
};

export default function Sobre() {
  return (
    <section className={estilos.conteudo}>
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        molestias, deserunt veniam voluptas, ea nesciunt perferendis
        perspiciatis recusandae cum suscipit neque ipsam? Dolorem perspiciatis
        itaque explicabo, obcaecati similique pariatur omnis.
      </p>
    </section>
  );
}
