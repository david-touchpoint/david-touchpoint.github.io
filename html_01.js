async function auto_exec(){

}

async function mainHTML(params) {
  const html = `
  <h1>Touchpoint Excel</h1>
  <img src="https://david-touchpoint.github.io/images/logo-pink.jpeg" alt="pink logo">
  `;
  await Jade.open_canvas("Script-Controller", html, true);
}