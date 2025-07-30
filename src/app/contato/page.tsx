// src/app/contatos/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Entre em contato com o petshop",
};

export default function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        molestias, deserunt veniam voluptas, ea nesciunt perferendis
        perspiciatis recusandae cum suscipit neque ipsam? Dolorem perspiciatis
        itaque explicabo, obcaecati similique pariatur omnis.
      </p>
    </section>
  );
}
