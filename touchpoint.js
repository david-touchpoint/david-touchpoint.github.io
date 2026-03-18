//Hello
async function auto_exec(){
  console.log('This is the beginning');
  await Jade.load_js("https://david-touchpoint.github.io/html_01.js", "html");
  console.log("HTML loaded");
  await jade_modules.html.mainHTML();

}