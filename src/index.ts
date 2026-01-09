export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body style="background-color: lightgreen; color: black;">
		  <h1>How you doin?</h1>
		  <p>F U Z Z Y L O G I C</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
