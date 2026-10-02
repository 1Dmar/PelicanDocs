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

## Build APK with GitHub Actions (recommended for Termux/ARM phones)

When local Termux build fails due to architecture issues, build on GitHub runners and download the APK.

### Termux commands

```bash
pkg update -y
pkg install git gh -y
termux-setup-storage
cd ~/PelicanDocs
gh auth login
git add .github/workflows/build-apk.yml README.md
git commit -m "Add GitHub Actions APK build workflow"
git push
gh workflow run build-apk.yml
RUN_ID=$(gh run list --workflow build-apk.yml --limit 1 --json databaseId --jq '.[0].databaseId')
gh run watch "$RUN_ID"
gh run download "$RUN_ID" -n hi-father-apk -D /sdcard/Download
ls /sdcard/Download/hi-father-debug.apk
```
