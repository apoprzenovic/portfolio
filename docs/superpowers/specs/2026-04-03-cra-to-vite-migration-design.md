# CRA to Vite Migration - Design Spec

## Goal

Migrate the portfolio from Create React App (react-scripts@5.0.1) to Vite to resolve all 26 npm vulnerabilities and modernize the build toolchain.

## Changes

### 1. Dependencies

**Remove:**
- `react-scripts` (5.0.1)
- `eslint-config-react-app` (^7.0.1)
- `@babel/plugin-proposal-private-property-in-object` (^7.21.0)
- `@testing-library/jest-dom` (^5.16.5)
- `web-vitals` (^2.1.4)

**Add (devDependencies):**
- `vite` (^6)
- `@vitejs/plugin-react` (^4)
- `@types/node` (^22)

**Update:**
- `typescript` from ^4.9.5 to ^5

### 2. New file: `vite.config.ts` (project root)

Configure Vite with React plugin. Set `base: '/'` for Cloudflare Pages deployment.

### 3. Move and update `index.html`

- Move `public/index.html` to project root (`./index.html`)
- Add `<script type="module" src="/src/index.tsx"></script>` before `</body>`
- Remove `%PUBLIC_URL%` prefixes from asset references (Vite handles this differently)

### 4. Fix `require()` imports to ES module imports

**`src/components/About.tsx`:**
- Replace `src={require("../assets/images/me.jpg")}` with a static `import meImage from "../assets/images/me.jpg"` and use `src={meImage}`

**`src/components/Home.tsx`:**
- Replace `src={require("../assets/animations/animation.mp4")}` with a static `import animationVideo from "../assets/animations/animation.mp4"` and use `src={animationVideo}`

### 5. Update `tsconfig.json`

- Update compiler options for Vite compatibility (module, moduleResolution, target)
- Add Vite client types

### 6. Replace type declarations

- Delete `src/react-app-env.d.ts` (CRA-specific)
- Create `src/vite-env.d.ts` with `/// <reference types="vite/client" />`

### 7. Update `package.json` scripts

```json
{
  "start": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist -t -r https://arnespoprzenovic:${GH_TOKEN}@github.com/apoprzenovic/portfolio.git"
}
```

- Remove `predeploy`, `test`, `eject` scripts
- Remove `eslintConfig` and `browserslist` sections from package.json

### 8. Delete CRA artifacts

- `src/reportWebVitals.ts`
- `src/setupTests.ts`
- `public/manifest.json`

### 9. Update `src/index.tsx`

- Remove `reportWebVitals` import and call

### 10. Update `.gitignore`

- Replace `build` with `dist` (Vite output directory)

## Files NOT changed

- All component files (except require() fixes in About.tsx and Home.tsx)
- `src/globals.css`, `src/index.css`
- `tailwind.config.js`
- `public/favicon.ico`, `public/logo.png`, `public/logo.svg`, `public/robots.txt`, `public/sketch.properties`
- `README.md`

## Verification

- `npm run build` succeeds with zero errors
- `npm audit` shows 0 vulnerabilities (or only low-severity ones unrelated to CRA)
- `npm run preview` serves the site correctly