import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Qossay';

export const lastName = 'Abuamriya';

export const description =
	'Software Engineer with 3 years of experience, specializing in AI and cloud driven solutions that address business and user challenges, with expertise in leveraging AI services from major providers such as Azure, OpenAI, IBM, AWS, and Google. Experienced in NLP, OCR, STT, TTS, and LLMs, and adept at developing software for cloud environments to maximize AI impact.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/QossayFarhan' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/qossay-abuamriya/'
	},
	{
		platform: Platform.Email,
		link: 'qossay.amriya@gmail.com'
	}
];

export const skills = getSkills('image', 'Azure', 'IBM', 'openAI', 'Pyhton', 'Kuberntes', 'Docker', 'Hugging Face', 'GitHub');
