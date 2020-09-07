/* Para el registro del medicamento de la app


estas lineas nos ayudan a crear un html
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

*/

// nos ayudaron a crear un template con css y js y el de arriba solo html

function doGet(request) {
  return HtmlService.createTemplateFromFile('medicamento')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
