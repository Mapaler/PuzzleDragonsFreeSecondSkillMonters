@echo off
title 使用Aria2下载怪物图片
aria2c.exe --input-file=Aria2下载列表文件-怪物图片.down --allow-overwrite=true --auto-file-renaming=false --remote-time=true --continue=true
pause