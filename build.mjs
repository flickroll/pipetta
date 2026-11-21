// Wraps game.html (the page fragment) into a standalone index.html for iPhone Safari / home screen.
import { readFileSync, writeFileSync } from 'node:fs';
const body = readFileSync(new URL('./game.html', import.meta.url), 'utf8');
const head = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Pipetta">
<meta name="theme-color" content="#070A2B">
<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px);box-sizing:border-box;height:100%}body{margin:0}[hidden]{display:none!important}</style>
</head>
<body>
`;
writeFileSync(new URL('./index.html', import.meta.url), head + body + '</body>\n</html>\n');
