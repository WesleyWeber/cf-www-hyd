export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>

		<body style="background-color: black; color: lightgreen;">
			<div class="center-text">  
				<h1>How you doin?</h1>

				<table=50%>
				 <tr>
				  <td>
                    <a href="https://www.hamqsl.com/solar.html" 
                        title="Click to add Solar-Terrestrial Data to your website!">
                        <img src="https://www.hamqsl.com/solarn0nbh.php">
                    </a>
                  </td>
                <td><img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg"></td>
                </tr>
                </table>
			</div>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
