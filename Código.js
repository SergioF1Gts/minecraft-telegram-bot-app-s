// =============================
// CONFIGURACIÓN
// =============================
const TOKEN = "8228217986:AAFD1otFujPZ8LSQnQ0J6O4mj6TwbX6evsM"; // Token del bot
const URL = "https://api.telegram.org/bot" + TOKEN;

// =============================
// WEBHOOK (recibe mensajes)
// =============================
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  
  const chatId = data.message.chat.id;
  const text = data.message.text;

  let respuesta = "";

  if(text === "/start"){
    respuesta = "👋 Hola! Bienvenido al bot de servidores de Minecraft.\n\nUsa /servers para ver los servidores disponibles.";
  }

  else if(text === "/servers"){
    respuesta = obtenerServidores();
  }

  else{
    respuesta = "❓ Comando no reconocido.\nUsa /servers";
  }

  enviarMensaje(chatId, respuesta);
}

// =============================
// ENVIAR MENSAJE
// =============================
function enviarMensaje(chatId, texto){

  const payload = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: texto
    }
  };

  UrlFetchApp.fetch(URL + "/", payload);
}

// =============================
// LEER SERVIDORES DEL SHEET
// =============================
function obtenerServidores(){

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Servidores");
  const datos = sheet.getDataRange().getValues();

  let mensaje = "🖥️ Servidores disponibles:\n\n";

  for(let i=1; i<datos.length; i++){

    const nombre = datos[i][0];
    const ip = datos[i][1];
    const estado = datos[i][2];

    mensaje += "🎮 " + nombre + "\n";
    mensaje += "IP: " + ip + "\n";
    mensaje += "Estado: " + estado + "\n\n";
  }

  return mensaje;
}