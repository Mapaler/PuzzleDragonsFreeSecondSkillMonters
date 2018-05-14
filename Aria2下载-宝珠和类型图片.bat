@echo off
title 使用Aria2下载宝珠和类型图片
aria2c.exe --input-file=Aria2下载列表文件-宝珠和类型图片.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true
pause