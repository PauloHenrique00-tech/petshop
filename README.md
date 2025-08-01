# PetShop

Projeto de uma aplicação web SPA usando NEXT.js, Typescript e Supabase (Baas - Back-End as a Service).

## 05_home-com-lista-de-posts-a-partir-de-um-array

- Configuração e exportção de um novo tipo `Post.ts`
- Adição de um array de dados: `array-posts.ts`
- Componente `ListaPosts.tsx` com prop `posts`
- Utilização do `map` para renderizar os <article> com o conteúdo dinâmico de cada post

## 04_melhorias-nas-paginas-e-componente-container

- Adição de conteúdo às pages (Sobre, Produtos, Contato)
- Utilização de imagem SVG na page Not Found
- Criação e aplicação do componente Container usando children
- Desativação do compilador Turbopack para evitar bugs de cache (em especial quando a alguns módulos CSS)

---

## 03_componentes-cabeçalho-menu-e-modulos-de-estilo

- Criação de componentes `Cabecalho` e `Menu`
- Deinifição de link ativo no menu estilzando o hook `usePathName`
- Ativação e renderização de componente em modo cliente com `use client`
- Importação e aplicação de módulos CSS

---

## 02_paginas-basicas-links-ajustes-de-layout-metadados

- Criação das páginas/rotas (usando pastas e arquivo page)
- Definição de metadados específicos para cada página
- adição do componente `<Link>` para navegação entre as rotas
- Ajustes diversos de estrutura HTML

---

## 01_css-global-fonts-favicon-metadados

- Adição de estilos globais
- Importação, configuração e aplicação de fonts da web usando `next/fonts`
- Adição de mais metadados
- Aplicação automática de favicon adicionando arquivo `icon.png` direto na pasta `app`

## 00_projeto-zerado

Ajustes e exclusões de elementos da instalação padrão do Next.js

### Revisando tópicos importantes

- `src/app/page.tsx`: página principal (index, Home). Obs.: o nome do arquivo **precisa ser** `page.tsx`, mas o nome interno (na função) pode ser qualquer um.

- `src/app/layout.tsx`: componente/arquivo especial que define a estrutura padrão (layout) para todas as páginas.
