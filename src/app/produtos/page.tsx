// src/app/produtos/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Produtos de higiene, acessórios e brinquedos para pets",
};

export default function Produtos() {
  return (
    <section>
      <h2>Produtos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        molestias, deserunt veniam voluptas, ea nesciunt perferendis
        perspiciatis recusandae cum suscipit neque ipsam? Dolorem perspiciatis
        itaque explicabo, obcaecati similique pariatur omnis.
      </p>
    </section>
  );
}
