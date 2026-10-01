# Hi Father Android App

This repository now includes a simple Android app with a modern UI that shows:

`hi father 😀`

## Build APK

1. Install Android SDK and set `ANDROID_HOME` (or create `local.properties` with `sdk.dir=...`).
2. From repository root, run:

```bash
./gradlew exportDebugApk
```

3. The APK will be generated at:

`/home/runner/work/PelicanDocs/PelicanDocs/apk/hi-father-debug.apk`

## Install on your Android phone

- Enable **Developer options** and **USB debugging** on your phone.
- Connect phone with USB.
- Install APK:

```bash
adb install -r apk/hi-father-debug.apk
```

Or copy the APK file from the `apk` folder to your phone and open it.
