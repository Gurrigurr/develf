<script>
	import LinkedInIcon from '../lib/linkedInIcon.svelte';
	const companyName = 'DevElf';
	const linkedInUrl = 'https://www.linkedin.com/company/develf';
	const props = {
		size: 40,
		color: '#efefef',
	};
</script>

<main
	class="grid h-dvh grid-cols-1 justify-items-center bg-white
	bg-gradient-to-tr from-slate-800 from-10% via-slate-800 via-40% to-slate-600 to-100%
	px-2 text-white"
>
	<div class=" h-auto content-center justify-items-center">
		<h1
			class="bg-gradient-to-br from-sky-300 from-10% via-sky-200
		via-40% to-sky-500 to-90% pb-1 text-9xl font-extralight subpixel-antialiased drop-shadow-lg"
		>
			<!-- <h1
			class="bg-gradient-to-br from-sky-700 from-10% via-sky-500
		via-40% to-sky-800 to-90% pb-1 text-9xl font-extralight subpixel-antialiased drop-shadow-lg"
		> -->
			{companyName}
		</h1>
		<p class="pb-3 text-center text-xs font-normal leading-5 text-slate-300 drop-shadow">
			Every project needs a developer elf. We are here to help you with that!<br />
			For contact or more information, visit our LinkedIn page.
		</p>
		<div>
			<div>
				<a
					href={linkedInUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn Company Profile"
				>
					<LinkedInIcon {...props} />
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	h1 {
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}
</style>
