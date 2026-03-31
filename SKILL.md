# Canne & Gatto | Projeto de Marca Veterinária Premium

Este documento define os padrões técnicos, de design e as regras arquiteturais para o hospital veterinário **Canne & Gatto**. Este projeto foca em alta conversão, autoridade profissional e uma identidade visual moderna e tecnológica.

## 🛠️ Stack Tecnológica

1. **Frontend**: Vite + React.
2. **Estilização**: Vanilla CSS (CSS puro) com variáveis globais em `index.css`.
3. **Icons**: SVGs inline (Instagram, Facebook) para máxima performance.
4. **Localização**: Google Maps incorporado via `iframe`.

## 🎨 Sistema de Design (Tokens)

As cores e tipografia foram rigorosamente extraídas da identidade visual oficial:

- **Cores**:
  - `var(--primary-brown)`: `#7C442A` (Marrom base - sobriedade e conforto).
  - `var(--primary-green)`: `#A8C66C` (Verde destaque - saúde e vida).
  - `var(--secondary-peach)`: `#D4A790` (Pêssego suave - acolhimento).
  - `var(--bg-soft)`: `#FDF8F5` (Fundo premium).

- **Tipografia**:
  - **Fonte Principal**: `Outfit` (utilizada em cabeçalhos e corpo de texto).
  - **Wordmark da Marca**: Sempre em **minúsculas** (`canne & gatto`) para manter a sofisticação.
  - **O Ampersand (&)**: Deve ser estilizado em **verde** e com peso/tamanho proporcional (ex: `0.85em`, `fontWeight: 400`).

## 📁 Estrutura de Ativos (Assets)

Os arquivos de marca estão centralizados em `src/assets/`:
- `logocanneegatto.jpg`: Logo horizontal oficial.
- `favivocon.jpg`: Símbolo quadrado (cão e gato) usado no Favicon.
- `495512351_...n.jpg`: Imagem de herói (Golden Retriever + Gato).

## 🌍 Regras de Deploy

O projeto está configurado para ser servido em uma subpasta:
- **Base Path**: `/canneegatto/` (configurado em `vite.config.js`).
- **Build**: `npm run build` gera a pasta `dist/` com caminhos relativos ao subdiretório.

## 📋 Regras de Desenvolvimento (Skills)

1. **Aesthetics First**: Todas as novas seções devem seguir o padrão premium, com bordas arredondadas (**40px** para seções grandes, **20px** para cartões) e sombras suaves.
2. **Mobile-First**: A grid do rodapé e a lista de especialidades devem ser responsivas.
3. **No Placeholders**: Sempre use imagens reais fornecidas pelo cliente ou geradas com qualidade ultra-alta.
4. **Authority Focus**: Enfatize as credenciais da **Dra. Adriene Firmo (CRMV RJ 5302)** e o **Centro de Capacitação Profissional**.

> [!NOTE]
> Este projeto não utiliza TailwindCSS por opção de design, priorizando o controle total sobre o CSS Vanilla.
