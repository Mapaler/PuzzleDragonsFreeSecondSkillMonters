@echo off
set quality=80
echo 设定转换质量为%quality%
::每次都重新转换card图片
title 正在转换card图像
echo 正在转换card图像
for /f %%f in ('dir /b cards\*.png') do (
if not exist "cards\%%~nf.webp" (
 .\cwebp.exe "cards\%%f" -q %quality% -o "cards\%%~nf.webp"
)
)
::UI不重新转换
title 正在转换UI
echo 正在转换UI
for /f %%f in ('dir /b *.png') do (
if not exist "%%~nf.webp" (
 .\cwebp.exe "%%f" -q %quality% -o "%%~nf.webp"
)
)
title 转换完毕
echo 转换完毕
pause