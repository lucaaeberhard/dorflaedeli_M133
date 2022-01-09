# Dorflädli M133
This is a project for the M133

### Anleitung
Die Applikation verwendet die im Unterricht angewandte Deno-Version 1.4.6.

1: Im Terminal, nach dem clonen, ins Verzeichnis navigieren

```shell
$ cd dorflaedeli_M133
```

2: Im Terminal folgenden Command ausführen

```shell
$ npm i
```

3: `.env` -File im Root-Ordner hinzufügen mit folgendem Inhalt

```
APP_WRITE_API_ENDPOINT=http://localhost/v1
APP_WRITE_PROJECT_ID=
APP_WRITE_API_KEY=
```

4: Im Terminal folgenden Command ausführen

```shell
$ deno cache server/deps.ts
```

5: Im Terminal folgenden Command ausführen und im Hintergrund laufen lassen

```shell
$ npm run dev:server
```

6: In neuem Terminal folgenden Command ausführen

```shell
$ npm run dev
```
