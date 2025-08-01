// src/components/ListaPosts.tsx
import { Post } from "@/types/Post";
import estilos from "./ListaPosts.module.css";

/* Configurando um tipo para este componente e, 
neste tipo, definimos a prop posts relacionando ela ao tipo 
Post criado anteriormente.*/
type ListaPostsProps = {
  posts: Post[];
};
export default function ListaPosts({ posts }: ListaPostsProps) {
  console.log(posts);

  return (
    <div className={estilos.posts}>
      <article>
        <h3>Título do post...</h3>
        <p>Subtítulo do post...</p>
      </article>
    </div>
  );
}
