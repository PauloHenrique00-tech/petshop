// src/app/posts/[id]/page.tsx
import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";
import { Post } from "@/types/Post";
import { notFound } from "next/navigation";

type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

async function buscarPostPorId(id: string): Promise<Post> {
  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

if (resposta.status === 404) {
  // Buscar a page not-foound.tsx automticamente em caso de erro 404
  notFound();
}

  if (!resposta.ok) {
    throw Error("Erro ao buscar o post: " + resposta.statusText);
  }

  const post: Post = await resposta.json();
  return post;
}

export async function generateMetadata({ params }: DetalhePostProps) {
  const { id } = await params;
  const post = await buscarPostPorId(id);

  return {
    title: post.titulo + " | PetShop",
    description: post.descricao,
  };
}

/* DESAFIO! Faça um novo fetch na API usando este ID e mostre no HTML abaixo os dados obtidos! */

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
  console.log(id);

  const resposta = await fetch(`http://localhost:2112/posts/${id}`, {
    next: { revalidate: 0 },
  });

  if (!resposta.ok) {
    throw new Error("Erro ao carregar o post");
  }

  const post: Post = await resposta.json();

  return (
    <article className={estilos.conteudo}>
      <h2>{post.titulo}</h2>
      <Container>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Container>
    </article>
  );
}
