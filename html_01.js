async function auto_exec(){

}

async function mainHTML(params) {
  const html = `
  <h1>Touchpoint Excel</h1>
  `;
  await Jade.open_canvas("Script-Controller", html, true);
}