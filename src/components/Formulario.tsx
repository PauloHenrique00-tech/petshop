// src/components/formulario.tsx
import estilos from "./Formulario.module.css";

export default function Formulario() {
  return (
    <form action="" className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe um email válido"
        />
      </div>
      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="Escreva sua mensagem aqui"
        ></textarea>
      </div>
      <div className={estilos.campo}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
