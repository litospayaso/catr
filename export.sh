export ANDROID_HOME=/home/litos/android-sdk-linux/
rm android-release-aligned.apk
rm android-release.apk
mv platforms/android/build/outputs/apk/android-release-unsigned.apk android-release-unsigned.apk
jarsigner -verbose -keystore angelita.keystore -storepass angel1tq -keypass angel1tq android-release-unsigned.apk angelita
mv android-release-unsigned.apk android-release.apk
zipalign -v 4 android-release.apk android-release-aligned.apk

