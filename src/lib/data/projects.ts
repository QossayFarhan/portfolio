import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: 'blue',
		description:
			'Audio Summary Application Utilizing Azure AI Services - full details will be added',
		shortDescription:
			'Audio Summary Application Utilizing Azure AI Services ',
		links: [],
		logo: Assets.Dart,
		name: 'Summary genius',
		period: {
			from: new Date()
		},
		skills: getSkills('Azure', 'image'),
		type: 'Mobile App'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: 'blue',
		description:
			'AI Document Processing Solution using Azure and Python FastAPI - full details will be added',
		shortDescription:
			'AI Document Processing Solution using Azure and Python FastAPI ',
		links: [],
		logo: Assets.azure,
		name: 'AI Document Processing',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: []
	}
];

export const title = 'Projects';
