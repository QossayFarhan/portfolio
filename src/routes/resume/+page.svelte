<script>
	import { data, title } from '@data/resume';
	import { base } from '$app/paths'; // Import base path

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	// Ensure the correct path for the PDF file
	const pdfPath = `${base}/cv.pdf`;
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<iframe src={pdfPath} class="pdf-preview"></iframe>
			<a href={pdfPath} download="resume.pdf">
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;

		.pdf-preview {
			width: 100%;
			height: 500px;
			border: 1px solid #ccc;
			margin-bottom: 10px;
		}

		& > a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
