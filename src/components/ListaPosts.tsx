// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";
import Link from "next/link";

type ListaPostsProps = {
  posts: Post[];
};
export default function ListaPosts({ posts }: ListaPostsProps) {
  return (
    <div className={estilos.posts}>
      {posts.map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3>{post.titulo}</h3>
            <p>{post.subtitulo}</p>
          </Link>
        </article>

        // {posts.map(({ id, titulo, subtitulo }) => (
        // <article key={id}>
        //   <h3>{titulo}</h3>
        //   <p>{subtitulo}</p>
        // </article> (versão desestrurada)
      ))}
    </div>
  );
}
