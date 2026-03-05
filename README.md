#  Minecraft Telegram Bot — Google Apps Script

Bot de Telegram para consultar servidores de Minecraft directamente desde Google Sheets. Desarrollado con Google Apps Script y desplegado como webhook.

---

## 📋 Características

- 🖥️ Lista todos los servidores con IP y estado
- 🟢🔴 Indicador visual Online/Offline automático
- 📊 Resumen rápido de estado de servidores
- 📡 Lee los datos en tiempo real desde Google Sheets
- ⚡ Soporte para Markdown en los mensajes de Telegram

---

##  Comandos del Bot

| Comando | Descripción |
|---------|-------------|
| `/start` | Mensaje de bienvenida |
| `/servers` | Lista todos los servidores disponibles |
| `/status` | Resumen de servidores online/offline |
| `/ayuda` | Muestra todos los comandos |

---

##  Estructura del Google Sheet

La hoja debe llamarse **`Servidores`** y tener este formato:

| A - Nombre | B - IP | C - Estado | D - Versión | E - Jugadores |
|------------|--------|------------|-------------|---------------|
| Survival   | play.miservidor.com | Online | 1.21 | 45/100 |
| Creative   | creative.miservidor.com | Offline | 1.20 | 0/50 |

> Las columnas D (Versión) y E (Jugadores) son opcionales.

---

##  Instalación y configuración

### 1. Crear el Bot en Telegram

1. Abre Telegram y busca **@BotFather**
2. Ejecuta `/newbot` y sigue las instrucciones
3. Copia el **TOKEN** que te entrega

### 2. Configurar Google Apps Script

1. Abre tu **Google Sheets**
2. Ve a **Extensiones → Apps Script**
3. Pega el código del archivo `minecraft_bot.gs`
4. Reemplaza el token en la configuración:

```javascript
const CONFIG = {
  TOKEN: "TU_TOKEN_AQUI",
  SHEET_NAME: "Servidores",
};
```

### 3. Desplegar como Web App

1. En Apps Script clic en **Implementar → Nueva implementación**
2. Tipo: **Aplicación web**
3. Ejecutar como: **Yo**
4. Quién tiene acceso: **Cualquier usuario**
5. Clic en **Implementar** y copia la **URL**

### 4. Registrar el Webhook

En la función `registrarWebhook()`, reemplaza la URL con la que copiaste:

```javascript
function registrarWebhook() {
  const webhookUrl = "https://script.google.com/macros/s/TU_DEPLOYMENT_ID/exec";
  ...
}
```

Luego ejecútala desde el editor de Apps Script.

---

##  Configuración local con clasp

[clasp](https://github.com/google/clasp) permite sincronizar el código entre tu PC, Apps Script y GitHub.

### Requisitos

- [Node.js](https://nodejs.org/) instalado
- Cuenta de Google

### Instalación de clasp

```bash
npm install -g @google/clasp
```

### Habilitar Apps Script API

Ve a  https://script.google.com/home/usersettings y activa **Google Apps Script API**

### Login

```bash
clasp login
```
Se abrirá el navegador para autorizar tu cuenta de Google.

### Clonar el proyecto desde Apps Script

1. En Apps Script ve a **⚙️ Configuración del proyecto**
2. Copia el **ID del script**
3. Ejecuta en terminal:

```bash
mkdir minecraft-telegram-bot
cd minecraft-telegram-bot
clasp clone "TU_SCRIPT_ID_AQUI"
```

---

##  Subir a GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "feat: bot de Minecraft para Telegram"

# Conectar con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/minecraft-telegram-bot.git
git branch -M main
git push -u origin main
```

---

##  Flujo de trabajo diario

```bash
# Bajar cambios de Apps Script a tu PC
clasp pull

# Subir cambios de tu PC a Apps Script
clasp push

# Guardar cambios en GitHub
git add .
git commit -m "update: descripción del cambio"
git push
```

---

##  Seguridad

> **Nunca subas tu TOKEN de Telegram a GitHub.**
> Usa un placeholder como `TU_TOKEN_AQUI` en el código público.

---

##  Estructura del proyecto

```
minecraft-telegram-bot/
├── minecraft_bot.gs      # Código principal del bot
├── appsscript.json       # Configuración de Apps Script
└── README.md             # Este archivo
```

---

## 📄 Licencia

MIT — libre para usar y modificar.
