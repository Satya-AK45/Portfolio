import { useEffect, useRef } from 'react';

interface RevealOptions {
	rootMargin?: string;
	threshold?: number | number[];
	once?: boolean;
	className?: string; // base hidden class
	visibleClassName?: string; // class added when visible
}

export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
	const {
		rootMargin = '0px 0px -10% 0px',
		threshold = 0.15,
		once = true,
		className = 'reveal',
		visibleClassName = 'reveal-visible',
	} = options;

	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === 'undefined') return;

		// ensure base class present
		el.classList.add(className);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					el.classList.add(visibleClassName);
					if (once) observer.unobserve(entry.target);
				} else if (!once) {
					el.classList.remove(visibleClassName);
				}
			});
		}, { root: null, rootMargin, threshold });

		observer.observe(el);
		return () => observer.disconnect();
	}, [rootMargin, threshold, once, className, visibleClassName]);

	return ref;
}

export default useReveal;
