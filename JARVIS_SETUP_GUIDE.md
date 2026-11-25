# OpenJarvis Setup & User Guide

Welcome to your **Jarvis AI Assistant** powered by **OpenJarvis**, **ElevenLabs Voice**, and the **Permission-Gated Multi-App Messaging Gateway**.

---

## 1. What Has Been Installed & Configured

1. **OpenJarvis Framework**:
   - Cloned and extracted from [`https://github.com/open-jarvis/OpenJarvis.git`](https://github.com/open-jarvis/OpenJarvis.git).
   - Python 3.11 runtime environment provisioned via Astral `uv`.
   - Virtual environment configured at `OpenJarvis-main/.venv/` with all 66+ core and speech dependencies installed.
   - Data & config directory isolated at `.openjarvis_data/`.

2. **ElevenLabs Voice Integration**:
   - Configured default voice: **"George"** (`JBFqnCBsd6RMkjVDRZzb`) — the quintessential warm, articulate British male voice modeled after Paul Bettany's J.A.R.V.I.S.
   - Alternative top voices pre-registered:
     * **Adam** (`pNInz6obpgDQGcFmaJgB`): Deep, authoritative American narrator.
     * **Brian** (`nPczCjzI2devNBz1zQrb`): Resonant British narrator.
     * **Daniel** (`onwK4e9ZLuTAKqWW03F9`): Formal British broadcaster.
   - Audio synthesized in high quality and played via Windows audio subsystem (`winsound`).

3. **Permission-Gated Messaging Gateway**:
   - **WhatsApp**:
     * Launches Windows WhatsApp Desktop (`whatsapp://send?phone=...&text=...`) or WhatsApp Web with the message pre-filled.
     * Supports OpenJarvis Baileys bridge and WhatsApp Cloud API.
   - **Telegram**:
     * Launches chat directly or interfaces with Bot API.
   - **Email**:
     * Drafts message directly in default Windows email client (`mailto:`) or SMTP.
   - **Other Apps**:
     * Generic desktop dispatcher with automatic clipboard staging.
   - **Mandatory Permission Guard**:
     * **Zero accidental sends**: Before any message is transmitted, Jarvis prompts:
       ```text
       ====================================================================
         [JARVIS PERMISSION GATEWAY] AUTHORIZATION REQUIRED
       ====================================================================
         App / Channel : WHATSAPP
         Recipient     : +1234567890
         Message       : "Hello Sir"
         Timestamp     : 2026-11-12 10:19:18
       ====================================================================

       >> Authorize transmission? [Y]es / [N]o / [E]dit:
       ```
     * `[Y]es`: Grants permission -> Message dispatched.
     * `[N]o`: Denies permission -> Immediately aborted, no network call made.
     * `[E]dit`: Allows modifying message or recipient before re-verifying.
     * All actions recorded in `.openjarvis_data/message_audit.jsonl`.

---

## 2. Quick Start

### Step 1: Add Your ElevenLabs API Key
Open `OpenJarvis-main/.env` and insert your API key:
```env
ELEVENLABS_API_KEY=your_actual_elevenlabs_api_key_here
ELEVENLABS_VOICE_ID=JBFqnCBsd6RMkjVDRZzb
```
*(If you do not have an ElevenLabs key yet, Jarvis will still run in text mode and alert you whenever speech is triggered.)*

### Step 2: Test the Voice
Run the voice test utility:
```powershell
& "OpenJarvis-main\.venv\Scripts\python.exe" "OpenJarvis-main\test_elevenlabs_voice.py"
```

### Step 3: Start Jarvis
Double-click `start_jarvis.bat` or run:
```powershell
& "OpenJarvis-main\.venv\Scripts\python.exe" "OpenJarvis-main\jarvis_assistant.py"
```

---

## 3. Example Commands in Jarvis

* **WhatsApp Message**:
  ```text
  whatsapp +919876543210 Meeting rescheduled to 4 PM
  ```
* **Telegram Message**:
  ```text
  telegram @username Hey, let me know when you are free
  ```
* **Email Draft**:
  ```text
  email colleague@company.com about Project Status: Report is ready for review
  ```
* **Generic App Message**:
  ```text
  message discord general: Deployment completed successfully
  ```
* **Voice Testing**:
  ```text
  speak Good day, Sir. Systems are functioning at 100 percent.
  ```
* **Voice Switcher**:
  ```text
  set voice adam
  set voice george
  ```
* **Status**:
  ```text
  status
  ```
* **Native OpenJarvis Subcommands**:
  ```text
  openjarvis doctor
  openjarvis channel list
  ```
