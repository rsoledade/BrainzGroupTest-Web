# Brainz Group - Front End

Sistema desenvolvido com React, TypeScript, Vite e Tailwind CSS inspirado no template do Brainz Group.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:
- **Node.js 18+** (recomendado) - [Download aqui](https://nodejs.org/)
- Ou **Bun** (alternativa mais rápida) - [Instruções aqui](https://bun.sh/)

> ⚠️ **Importante**: Se você não tem nenhum gerenciador de pacotes instalado, instale o Node.js primeiro e reinicie o terminal.

## 🚀 Início Rápido

### 1️⃣ Instalar Dependências

Escolha um dos gerenciadores de pacotes abaixo:

**Com npm (vem com Node.js):**
```bash
cd Front
npm install
```

**Com yarn:**
```bash
cd Front
yarn install
```

**Com pnpm:**
```bash
cd Front
pnpm install
```

**Com bun:**
```bash
cd Front
bun install
```

### 2️⃣ Executar o Projeto

**Com npm:**
```bash
npm run dev
```

**Com yarn:**
```bash
yarn dev
```

**Com pnpm:**
```bash
pnpm dev
```

**Com bun:**
```bash
bun dev
```

### 3️⃣ Acessar no Navegador

Abra seu navegador e acesse: **http://localhost:5173**

> 💡 Se a porta 5173 estiver em uso, o Vite automaticamente usará a próxima porta disponível.

## 📁 Estrutura do Projeto

```
Front/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes base (Button, Input, Card)
│   │   ├── layout/          # Header, Footer, Sidebar, DashboardLayout
│   │   ├── login/           # LoginForm, LoginHero
│   │   └── home/            # HeroSection, StatsSection, ServicesSection
│   ├── pages/
│   │   ├── home/            # HomePage pública
│   │   ├── login/           # LoginPage
│   │   └── dashboard/       # DashboardPage (após login)
│   ├── context/             # AuthContext
│   ├── utils/               # Utilitários (cn)
│   ├── App.tsx              # Rotas principais
│   └── main.tsx             # Entry point
├── public/                  # Assets estáticos
└── package.json
```

## 🎨 Design System

### Cores
- **Primary (Azul)**: #3b82f6
- **Secondary (Roxo)**: #8b5cf6
- **Accent (Verde)**: #10b981

### Tipografia
- Família: Inter, system-ui, sans-serif

## 🎯 Como Testar o Sistema

### Navegação no Site

1. **Página Inicial (`/`)**: 
   - Landing page pública com hero section
   - Estatísticas do Brainz Group (+5M usuários, +300 escolas privadas, +450 escolas públicas)
   - Seção de serviços (4 cards)
   - Header com navegação e menu mobile
   - Footer informativo

2. **Página de Login (`/login`)**:
   - Clique em "Login" no header
   - Layout em duas colunas (desktop) / single column (mobile)
   - Formulário com validação em tempo real

3. **Dashboard (`/dashboard`)**:
   - Após o login, você será redirecionado automaticamente
   - Menu lateral com navegação
   - Cards de estatísticas
   - Atividades recentes e próximas tarefas

### 🔐 Credenciais de Teste

O sistema possui **autenticação simulada (mock)**. Use qualquer email válido e senha com mais de 6 caracteres:

```
📧 Email: teste@exemplo.com
🔒 Senha: 123456
```

Ou qualquer outra combinação válida (email formato correto + senha 6+ caracteres).

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **React Router DOM** - Roteamento
- **Zod** - Validação de formulários
- **clsx + tailwind-merge** - Utilitários de classes CSS

## 📝 Funcionalidades

### Página Pública
- ✅ Hero section com gradiente
- ✅ Seção de estatísticas
- ✅ Seção de serviços
- ✅ Header com navegação
- ✅ Footer informativo
- ✅ Design responsivo

### Página de Login
- ✅ Formulário com validação em tempo real
- ✅ Layout em duas colunas (desktop)
- ✅ Hero section com informações
- ✅ Estados de loading e erro
- ✅ Design responsivo

### Dashboard
- ✅ Menu lateral (sidebar)
- ✅ Layout responsivo com menu mobile
- ✅ Cards de estatísticas
- ✅ Atividades recentes
- ✅ Próximas tarefas
- ✅ Proteção de rotas
- ✅ Logout funcional

## 📱 Testando Responsividade

O projeto é totalmente responsivo. Para testar:

1. Redimensione a janela do navegador
2. Teste em diferentes tamanhos:
   - 📱 **Mobile**: < 768px (menu hamburger)
   - 💻 **Tablet**: 768px - 1024px
   - 🖥️ **Desktop**: > 1024px

3. Observe:
   - Menu mobile (hamburger) aparece/desaparece
   - Layout de colunas se adapta automaticamente
   - Sidebar do dashboard some/aparece
   - Cards se reorganizam em grid responsivo

## 🐛 Solução de Problemas

### Erro: "npm não é reconhecido"
- **Causa**: Node.js não está instalado
- **Solução**: Instale o Node.js e reinicie o terminal

### Erro: "Cannot find module 'react-router-dom'"
- **Causa**: Dependências não foram instaladas
- **Solução**: Execute `npm install` (ou yarn/pnpm/bun install)

### Erro: "Port 5173 already in use"
- **Solução**: O Vite usará automaticamente a próxima porta disponível (5174, 5175, etc)

### Página em branco no navegador
- Verifique se o comando `npm run dev` está rodando
- Abra o console do navegador (F12) para ver erros
- Verifique se todas as dependências foram instaladas

### Erro do Tailwind CSS
- Execute `npm install` para garantir que todas as dependências estão instaladas
- Reinicie o servidor de desenvolvimento

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

## 🎯 Próximos Passos

- [ ] Integração com API real
- [ ] Implementar funcionalidade "Esqueci minha senha"
- [ ] Criar páginas de escolas, usuários e relatórios
- [ ] Adicionar testes unitários
- [ ] Implementar internacionalização (i18n)

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para o Brainz Group.