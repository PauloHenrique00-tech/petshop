import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import arrayPosts from "@/data/array-posts";
import { Post } from "@/types/Post";

export default async function Home() {
  const resposta = await fetch(`http://localhost:2112/posts`, {
    // Revalidamos o cache do next a cada requisição para garantir
    // que os dados estejam sempre atualiados
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao buscar os posts:" + resposta.statusText);
  }

  const posts: Post[] = await resposta.json();
  console.log(posts);

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>
      <p>Notícias atualizadas sobre o mundo pet</p>
      <ListaPosts posts={arrayPosts} />
    </section>
  );
}
