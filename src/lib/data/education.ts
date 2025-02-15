import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor in Software Engineering with Honors',
		description: '',
		location: 'Malaysia',
		logo: Assets.unimy,
		name: '',
		organization: 'University Malaysia of Computer Science and Engineering',
		period: { from: new Date(2021, 2, 1), to: new Date(2024, 3, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithms', 'Software Engineering', 'Python', 'C++', 'Java', 'Data Structures', 'Software Quality Assurance']
	}
];

export const title = 'Education';
