export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>

		<style>
			.center-text {
				width: 50%; /* Optional: define a width */
				margin-left: auto;
				margin-right: auto;
			}
		</style>

		<body style="background-color: lightgreen; color: black;">
			<div class="center-text">  
				<h1>How you doin?</h1>
			</div>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
