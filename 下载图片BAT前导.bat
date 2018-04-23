@echo off
cscript /nologo 下载觉醒图标图片.js
echo 开始使用Aria2下载
"E:\Program Files\aria2\aria2c.exe" --input-file=图片下载Aria2列表文件.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true
pause