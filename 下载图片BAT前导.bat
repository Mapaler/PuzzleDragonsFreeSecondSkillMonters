@echo off
cscript /nologo ���ؾ���ͼ��ͼƬ.js
echo ��ʼʹ��Aria2����
"E:\Program Files\aria2\aria2c.exe" --input-file=ͼƬ����Aria2�б��ļ�.down --allow-overwrite=false --auto-file-renaming=false --remote-time=true --continue=true
pause