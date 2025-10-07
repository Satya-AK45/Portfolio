# Portfolio (Vite + React + TypeScript + Tailwind)

Landing page replicating a clean personal portfolio hero section with floating badges, gradient backdrop, and glowing avatar ring.

## Features
- Vite + React + TypeScript
- Tailwind CSS with custom gradient + glow shadow
- Reusable components: `Navbar`, `Hero`, `FloatingBadge`, `AvatarGlow`
- Accessible semantic HTML, responsive layout

## Getting Started

Install dependencies:
```
npm install
```

Run dev server:
```
npm run dev
```

Build production output:
```
npm run build
```

Preview production build:
```
npm run preview
```

## Customize
- Replace `avatar-placeholder.png` with an actual profile image in the public root.
- Edit text in `Hero.tsx` for name, titles, and location.
- Adjust gradient in `tailwind.config.cjs` under `backgroundImage.hero-gradient` or `global.css` body utilities.
- Modify animation in `global.css` (`@keyframes float`).

## Structure
```
src/
	App.tsx
	main.tsx
	global.css
	components/
		Navbar.tsx
		Hero.tsx
		FloatingBadge.tsx
		AvatarGlow.tsx
```

## License
MIT (add a LICENSE file if you need explicit terms)
