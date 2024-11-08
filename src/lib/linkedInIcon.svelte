<script>
	let {size = 36, color = '#efefef'} = $props();
	let gradientId = 'linkedin-gradient';
	let useGradient = true;
</script>

{#if useGradient}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={color}
		viewBox="0 0 24 24"
		role="img"
	>
		<!-- Define the gradient colors in defs -->
		<defs>
			<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" style="stop-color: #0067C0; stop-opacity: 0.8" />
				<stop offset="100%" style="stop-color: #259cfe; stop-opacity: 0.5" />
			</linearGradient>
		</defs>

		<!-- Use the gradient for the path's fill -->
		<path
			d="M20.45 3H3.55A1.52 1.52 0 002 4.55v14.9A1.52 1.52 0 003.55 21h16.9a1.52 1.52 0 001.55-1.55V4.55A1.52 1.52 0 0020.45 3zM8.11 17.34H5.89v-7.7h2.22v7.7zM7 8.92a1.27 1.27 0 110-2.54 1.27 1.27 0 010 2.54zm10.34 8.42h-2.22v-3.64c0-.87-.02-1.98-1.21-1.98-1.22 0-1.4.95-1.4 1.92v3.7h-2.22v-7.7h2.13v1.05h.03a2.34 2.34 0 012.1-1.16c2.24 0 2.66 1.47 2.66 3.37v4.44z"
			fill={`url(#${gradientId})`}
		/>
	</svg>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill={color}
		viewBox="0 0 24 24"
		role="img"
	>
		<path
			d="M20.45 3H3.55A1.52 1.52 0 002 4.55v14.9A1.52 1.52 0 003.55 21h16.9a1.52 1.52 0 001.55-1.55V4.55A1.52 1.52 0 0020.45 3zM8.11 17.34H5.89v-7.7h2.22v7.7zM7 8.92a1.27 1.27 0 110-2.54 1.27 1.27 0 010 2.54zm10.34 8.42h-2.22v-3.64c0-.87-.02-1.98-1.21-1.98-1.22 0-1.4.95-1.4 1.92v3.7h-2.22v-7.7h2.13v1.05h.03a2.34 2.34 0 012.1-1.16c2.24 0 2.66 1.47 2.66 3.37v4.44z"
		/>
	</svg>
{/if}

<style>
	svg {
		transition: transform 0.2s ease;
	}
	svg:hover {
		transform: scale(1.1);
	}
</style>
