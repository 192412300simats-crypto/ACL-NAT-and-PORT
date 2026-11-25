@echo off
title JARVIS - Personal AI Assistant
cd /d "%~dp0OpenJarvis-main"
set OPENJARVIS_HOME=%~dp0.openjarvis_data
echo ====================================================================
echo Starting Jarvis Personal AI with ElevenLabs Voice and Secure Gateway...
echo ====================================================================
"%~dp0OpenJarvis-main\.venv\Scripts\python.exe" "%~dp0OpenJarvis-main\jarvis_assistant.py"
pause
