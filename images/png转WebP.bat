@echo off
set quality=80
echo �趨ת������Ϊ%quality%
::ÿ�ζ�����ת��cardͼƬ
title ����ת��cardͼ��
echo ����ת��cardͼ��
for /f %%f in ('dir /b cards\*.png') do (
if not exist "cards\%%~nf.webp" (
 .\cwebp.exe "cards\%%f" -q %quality% -o "cards\%%~nf.webp"
)
)
::UI������ת��
title ����ת��UI
echo ����ת��UI
for /f %%f in ('dir /b *.png') do (
if not exist "%%~nf.webp" (
 .\cwebp.exe "%%f" -q %quality% -o "%%~nf.webp"
)
)
title ת�����
echo ת�����
pause