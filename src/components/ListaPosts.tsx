// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

type ListaPostProps = {
  posts: Post[];
};
export default function ListaPosts({ posts }: ListaPostProps) {
  return (
    <div className={estilos.posts}>
      <article>
        <h3>Título do post...</h3>
        <p>Subtítulo do post...</p>
      </article>
    </div>
  );
}
