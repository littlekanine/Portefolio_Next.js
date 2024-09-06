
export const defaultProps = {
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	distance: '30px',
	duration: 1000,
	desktop: true,
	mobile: true,
  };
  
  const defaultOrigin = 'bottom';
  
  export const targetElements = [
	{
	  element: '.section-title',
	  animation: {
		delay: 300,
		distance: '0px',
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.section-title-project',
	  animation: {
		delay: 2000,
		distance: '0px',
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.section-project',
	  animation: {
		delay: 2500,
		distance: '0px',
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.section-cardStacks',
	  animation: {
		delay: 1000,
		distance: '0px',
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.hero-title',
	  animation: {
		delay: 500,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.hero-cta',
	  animation: {
		delay: 1000,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.about-wrapper__image',
	  animation: {
		delay: 600,
		origin: 'bottom',
	  },
	},
	{
	  element: '.about-wrapper__info',
	  animation: {
		delay: 1000,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.about-wrapper__link',
	  animation: {
		delay: 1500,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.project-wrapper__text',
	  animation: {
		delay: 500,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.project-wrapper__image',
	  animation: {
		delay: 1000,
		origin: defaultOrigin,
	  },
	},
	{
	  element: '.contact-wrapper',
	  animation: {
		delay: 800,
		origin: 'bottom',
	  },
	},
	{
	  element: '.skills-progress',
	  animation: {
		delay: 800,
		origin: defaultOrigin,
		duration: 1000,
		opacity: 1,
	  },
	},
  ];
  