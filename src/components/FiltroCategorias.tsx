// src/componentes/FiltroCategorias.tsx
import estilos from "./FiltroCategorias.module.css";

export default function FiltroCategorias() {
    return (
      <div className={estilos.categorias}>   
        <button>Categorias A</button>
        <button>Categoria B</button>
        <button className={estilos.limpar}>Limpar</button>
     </div> 
    );
}