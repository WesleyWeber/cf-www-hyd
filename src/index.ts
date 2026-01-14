export default {
  async fetch(request): Promise<Response> {
    const html = `<!DOCTYPE html>

<body style="background-color: black; color: rgb(122, 231, 122)">
  <table align="center" border="0" cellpadding="8" cellspacing="0" style="
      font-family: 'Courier New', monospace;
      color: rgb(122, 231, 122);
      background-color: #000;
      border: 6px double rgb(122, 231, 122);
      box-shadow: 0 0 0 3px #000, 0 0 20px rgba(122, 231, 122, 0.35);
      text-transform: uppercase;
      letter-spacing: 1px;
    ">
    <tr style="
        background: repeating-linear-gradient(
          0deg,
          rgba(169, 173, 169, 0.26),
          rgba(169, 173, 169, 0.26) 1px,
          rgba(0, 0, 0, 0) 2px,
          rgba(0, 0, 0, 0) 4px
        );
      ">
      <th colspan="2" align="center" style="
          border-bottom: 3px solid rgb(122, 231, 122);
          padding: 12px 16px;
          font-size: 30px;
        ">
        ? HOW YOU DOIN ?
      </th>
    </tr>
    <tr>
      <td style="
          border-right: 2px solid rgb(122, 231, 122);
          padding: 10px;
          background: repeating-linear-gradient(
            0deg,
            rgba(169, 173, 169, 0.26),
            rgba(169, 173, 169, 0.26) 1px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 0, 0, 0) 4px
          );
        ">
        <a href="https://www.hamqsl.com/solar.html" title="Click to add Solar-Terrestrial Data to your website!">
          <img src="https://www.hamqsl.com/solarn0nbh.php" style="border: 2px solid rgb(122, 231, 122)" />
        </a>
      </td>
      <td style="
          padding: 10px;
          background: repeating-linear-gradient(
            0deg,
            rgba(169, 173, 169, 0.26),
            rgba(169, 173, 169, 0.26) 1px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 0, 0, 0) 4px
          );
        ">
        <img src="https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg" height="530"
          style="border: 2px solid rgb(122, 231, 122)" />
      </td>
    </tr>
    <tr style="
        background: repeating-linear-gradient(
          0deg,
          rgba(169, 173, 169, 0.26),
          rgba(169, 173, 169, 0.26) 1px,
          rgba(0, 0, 0, 0) 2px,
          rgba(0, 0, 0, 0) 4px
        );
      ">
      <th colspan="2" align="center" style="
          border-top: 3px solid rgb(122, 231, 122);
          padding: 10px 16px;
          font-size: 24px;
        ">
        STATUS: ONLINE
      </th>
    </tr>

  </table>
</body>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
} satisfies ExportedHandler;
