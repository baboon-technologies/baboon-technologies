# Baboon Technologies · Handoff para desarrollador

Documento de traspaso rápido. Lo esencial para clonar, tocar y desplegar la web.

---

## 1. Qué es

Web corporativa de **Baboon Technologies**. SPA en React con seis rutas: Home, Quiénes somos, Equipo, Partners, Soluciones y Contacto. El único backend es un formulario de contacto que escribe en Supabase.

- **Producción:** https://baboontechnologies.com (apex redirige a `www`)
- **Preview Vercel:** https://baboon-technologies.vercel.app

## 2. Stack

| Cosa | Versión / Herramienta |
|---|---|
| Bundler | Vite 7 |
| Framework | React 19 + React Router 7 |
| Estilos | CSS por componente (sin Tailwind runtime; sí `tailwind-merge` para utilidades) |
| Animación | Framer Motion |
| Iconos | Lucide React |
| Backend | Supabase (Postgres + RLS) |
| Analítica | Vercel Analytics |
| Hosting | Vercel (auto deploy en push a `main`) |
| Node | 18+ recomendado |

## 3. Repositorios y consolas

| Recurso | URL | Notas |
|---|---|---|
| GitHub | https://github.com/baboon-technologies/baboon-technologies | Rama única `main`, sin PRs |
| Vercel | Proyecto `baboon-technologies`, team `info-44738373s-projects` | Auto deploy desde `main` |
| Supabase | Proyecto ref `mhsttxbecjqseudipdtl` (`https://mhsttxbecjqseudipdtl.supabase.co`) | Solo tabla `contact_messages` |
| Dominio | `baboontechnologies.com` gestionado desde Vercel | Apex 307 → `www` |

Pide credenciales de GitHub (org `baboon-technologies`), Vercel (team `info-44738373s-projects`) y Supabase (cuenta `baboontechnologies@gmail.com`) al owner del proyecto.

## 4. Empezar en local

```bash
git clone https://github.com/baboon-technologies/baboon-technologies.git
cd baboon-technologies
npm install
cp .env.example .env   # ver sección 5 para los valores
npm run dev            # http://localhost:5173
```

Scripts útiles:

- `npm run dev` — servidor de desarrollo con HMR.
- `npm run build` — build de producción a `dist/`.
- `npm run preview` — sirve el build local en el puerto 4173.
- `npm run lint` — ESLint sobre todo el proyecto.

## 5. Variables de entorno

Fichero `.env` en la raíz (ignorado por git):

```
VITE_SUPABASE_URL=https://mhsttxbecjqseudipdtl.supabase.co
VITE_SUPABASE_ANON_KEY=<pedir al owner o copiar del dashboard de Supabase>
```

En **Vercel** ya están configuradas para `production`, `preview` y `development` (Settings → Environment Variables). Si cambias la anon key, actualiza los tres entornos y redeploya.

La `VITE_SUPABASE_ANON_KEY` es pública por diseño (viaja al bundle del navegador). La protección real vive en las políticas RLS de Supabase.

## 6. Estructura del código

```
src/
├── main.jsx               # bootstrap React
├── App.jsx                # Router + <Analytics /> + NeuralBackground de fondo
├── App.css, index.css     # estilos globales
├── lib/
│   ├── supabase.js        # cliente Supabase inicializado con las env vars
│   └── utils.js           # helper cn() = clsx + tailwind-merge
├── pages/                 # una por ruta: Home, QuienesSomos, Equipo,
│                          # Partners, Soluciones, Contacto (jsx + css)
├── components/
│   ├── Navbar.jsx         # navegación superior
│   ├── HeroSection.jsx    # hero del Home
│   ├── AboutCards.jsx
│   ├── MissionVisionValues.jsx
│   ├── LogoCarousel.jsx   # carrusel de clientes/partners
│   ├── NeuralBackground.jsx  # canvas animado detrás de todo
│   └── ui/                # componentes reutilizables genéricos
└── styles/shared.css

public/                    # assets servidos tal cual en la raíz
├── HeroImage.png          # imagen OG para previews en redes/mensajería
├── favicon.jpeg
├── baboonlogo.png
├── Clients/, Partners/, Equipo/   # logos e imágenes por sección
└── ...

supabase/migrations/       # SQL versionado del esquema
index.html                 # entry HTML, incluye meta OG y fuentes
vite.config.js             # solo plugin de React
```

## 7. Formulario de contacto

- Componente: `src/pages/Contacto.jsx`.
- Escribe en la tabla `contact_messages` de Supabase (schema en `supabase/migrations/20260223074021_create_contact_messages_table.sql`).
- Columnas: `id (uuid)`, `name`, `company`, `email`, `message`, `created_at`, `status` (`new` por defecto).
- RLS activo: cualquiera puede `INSERT`; solo usuarios autenticados pueden `SELECT`.
- Para ver los mensajes recibidos: dashboard de Supabase → Table Editor → `contact_messages`.

## 8. Deploy

Auto por Vercel al hacer push a `main`. No hay staging separado.

```bash
git add .
git commit -m "..."
git push origin main       # dispara build + deploy en Vercel (~1 min)
```

Estado del deploy: dashboard de Vercel → proyecto `baboon-technologies` → Deployments.

Si necesitas rollback inmediato: Vercel → deploy anterior → "Promote to Production".

## 9. Analytics

`@vercel/analytics/react` está montado en `App.jsx`. Datos en Vercel → proyecto → Analytics. No requiere ninguna key ni configuración extra.

## 10. SEO / previews de enlaces

Meta tags Open Graph y Twitter Card en `index.html`. Si cambias el título o descripción, edítalo ahí y también en los tags `og:*` y `twitter:*`.

Imagen del preview: `public/HeroImage.png` (servida como `https://baboontechnologies.com/HeroImage.png`).

Tras cambiar meta OG, forzar re-scrape en:

- Facebook / WhatsApp: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter/X: https://cards-dev.twitter.com/validator

## 11. Cosas a saber

- El proyecto se generó originalmente con [bolt.new](https://bolt.new); algunos assets antiguos (`SVIBolt.png`, `AutoDocBolt.png`) se pueden borrar cuando quieras limpiar.
- El fondo animado (`NeuralBackground`) es un canvas pesado; si notas caída de FPS en móviles, es el primer sospechoso.
- No hay tests. No hay CI más allá del build de Vercel.
- El bundle pasa de 500 kB gzip; si crece más, considerar `manualChunks` en `vite.config.js` o code splitting con `React.lazy`.
- No hay `.env.example` en el repo; crearlo cuando sepas los valores exactos que quieres compartir.

## 12. Contacto owner

`baboontechnologies@gmail.com`
