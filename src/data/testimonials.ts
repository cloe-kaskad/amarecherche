// Témoignages. Tant que la liste est vide, le bloc ne s'affiche pas.
// Format : { name: 'Prénom', role: 'Fonction ou secteur', quote: 'Deux à quatre phrases.' }
export type Testimonial = { name: string; role: string; quote: string };
export const TESTIMONIALS: Testimonial[] = [];
