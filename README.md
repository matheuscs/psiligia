# Site da Lígia Rangel

Site institucional da psicóloga Lígia Rangel (Indaiatuba/SP). É um site estático — HTML e CSS puros, sem build, sem framework e sem dependências de JavaScript.

## Estrutura

```
public/            → tudo que é servido no site (raiz de hospedagem)
  index.html        → a página
  ligia-hero.webp    → foto de capa
  ligiarangel.png     → imagem usada no og:image (compartilhamento em redes sociais)
  psi-logo.png/.svg   → favicon
  fonts/              → Lora e Work Sans (fontes variáveis, auto-hospedadas)
  robots.txt, sitemap.xml

design/            → mockups e versões do design (histórico, não entra no site)
firebase.json      → configuração de hospedagem do Firebase
```

## Rodando localmente

Como não há build nem servidor de desenvolvimento, basta servir a pasta `public/` com qualquer servidor estático — por exemplo, a extensão "Live Server" do VS Code, ou:

```
npx serve public
```

Abrir o `public/index.html` direto no navegador (duplo clique) não funciona corretamente, porque as imagens e fontes usam caminhos absolutos (`/ligia-hero.webp`, `/fonts/...`) que só resolvem quando servidos a partir da raiz.

## Publicando

O projeto usa Firebase Hosting, já configurado para publicar o conteúdo de `public/`:

```
firebase deploy --only hosting
```
