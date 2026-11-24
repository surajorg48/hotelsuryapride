@echo off
cd /d "%~dp0"
title Hotel Surya Pride - Local Server
echo ========================================================
echo       HOTEL SURYA PRIDE - WEBSITE LAUNCHER
echo ========================================================
echo.
echo Starting local web server...
echo Your browser will automatically open in a moment:
echo http://localhost:5173
echo.
echo (Keep this window open while viewing the website)
echo ========================================================
start http://localhost:5173
npm run dev
pause
