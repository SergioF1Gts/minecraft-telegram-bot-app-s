#  Minecraft Server Bot

Gestiona tus servidores estilo Aternos desde Telegram, usando Google Sheets como base de datos.

---

##  Comandos

| Comando | Descripción |
|---------|-------------|
| `/agregar` | Registrar un nuevo servidor |
| `/ver` | Ver todos los servidores |
| `/estado` | Cambiar estado de un servidor |
| `/stats` | Ver estadísticas generales |
| `/cancelar` | Cancelar operación actual |

---

##  Estructura del Sheet

La hoja debe llamarse **`Servidores`** con este formato:

| Nombre | IP | Estado | Versión | Fecha |
|--------|----|--------|---------|-------|
| Survival | play.servidor.com | Online | 1.21 | 01/01/2025 |

> La hoja se crea automáticamente al agregar el primer servidor.

---

## ⚙️ Configuración

1. Crea tu bot con **@BotFather** en Telegram y copia el token
2. En Apps Script reemplaza el token:
```javascript
const CONFIG = {
  TOKEN: "TU_TOKEN_AQUI",
  SHEET_NAME: "Servidores",
};
```
3. Despliega como **Web App** y copia la URL
4. Pega la URL en `registrarWebhook()` y ejecútala

---

## 🛠️ Setup local con clasp

```bash
# Instalar clasp
npm install -g @google/clasp

# Login con Google
clasp login

# Clonar proyecto desde Apps Script
clasp clone "TU_SCRIPT_ID"
```

> El Script ID está en Apps Script → ⚙️ Configuración del proyecto

---

##  Subir a GitHub

```bash
git init
git add .
git commit -m "feat: bot de Minecraft para Telegram"
git remote add origin https://github.com/TU_USUARIO/minecraft-telegram-bot.git
git branch -M main
git push -u origin main
```

##  Flujo diario

```bash
clasp pull   # Bajar cambios de Apps Script
clasp push   # Subir cambios a Apps Script
git add . && git commit -m "update" && git push  # Guardar en GitHub
```

---

 **Nunca subas tu TOKEN real a GitHub.**
