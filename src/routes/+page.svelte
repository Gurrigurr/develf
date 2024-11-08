<script>
	import LinkedInIcon from '../lib/linkedInIcon.svelte';
	const companyName = 'DevElf';
	const linkedInUrlGustav = 'https://www.linkedin.com/in/gustav-nilsson-21800828';
	// const name = 'Gustav Nilsson';
</script>

<main class="content">
	<h1>{companyName}</h1>
	<p class="roboto-regular-italic">Supplying developer elves to companies in need since 2022!</p>
	<div class="link-container">
		<div class="link-item">
			<a
				href={linkedInUrlGustav}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn Company Profile"
			>
				<LinkedInIcon />
			</a>
		</div>
	</div>
</main>

<style>
	h1 {
		font-family: 'Roboto', sans-serif;
		font-size: 10rem;
		font-weight: 100;
		margin: 0;
		background: linear-gradient(170deg, #c5f369 6%, #59ada8 9%, #705eab 100%);
		color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}

	@media (max-width: 440px) {
		h1 {
			font-size: 6rem;
		}
	}

	.content {
		margin-top: 25vh;

		p {
			padding-bottom: 0.5rem;
		}
	}

	.link-container {
		display: flex;
		gap: 3rem;
		justify-content: center;
		align-items: center;
	}

	.link-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/*
		span {
			font-size: 1rem;
			margin-top: 0.5rem;
		} */
	}

	a {
		display: inline-block;
		margin-top: 1rem;
	}
</style>
