const getProgressWidth = (level) => {
	switch (level.toLowerCase()) {
		case 'beginner':
			return '25%';
		case 'medium':
			return '50%';
		case 'advanced':
			return '75%';
		case 'confirmed':
			return '100%';
		default:
			return '0%';
	}
};

export default getProgressWidth;
