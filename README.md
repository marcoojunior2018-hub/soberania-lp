# Soberania LP

## Environment Variables

Para o funil de diagnóstico funcionar corretamente na rota `/diagnostico`, crie um arquivo `.env` na raiz do projeto (mesmo nível do `package.json`) contendo:

```env
VITE_SUPABASE_URL=sua-url-do-supabase-aqui
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
VITE_CALENDLY_URL=https://calendly.com/marcoantonio/sua-reuniao
```

*Nota: O frontend utiliza diretamente o `supabase-js`, o que dispensa a necessidade de iniciar um backend Node.js (`server/index.ts`) para operação local ou em produção.*
