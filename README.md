# 智龙迷城免费二技宠列表 
## 在线查看
普通版本： https://mapaler.github.io/PuzzleDragonsFreeSecondSkillMonters/  
高级版本： https://mapaler.github.io/PuzzleDragonsFreeSecondSkillMonters/advanced.html

## 更新数据方式
* **有新增觉醒技能时**  
  在`生成觉醒技能列表.js`内`awokenCname`数组里按顺序新增觉醒对应中文名称，在[觉醒技能表](http://pad.skyozora.com/skill/%E8%A6%BA%E9%86%92%E6%8A%80%E8%83%BD%E4%B8%80%E8%A6%BD/)页面执行`生成觉醒技能列表.js`，生成最新的觉醒列表，并替换到`universal_jsonobj.js`与`生成二技宠物JSON.js`中相应位置。  
* **有新增怪物时**  
  按格式在`生成二技宠物JSON.js`内添加新怪物的id，然后在[战友网](http://pad.skyozora.com/)任意页面执行`生成二技宠物JSON.js`，并等待生成最新的怪物列表（数据获取状态可以从控制台查看）。  
  用Word将上述代码转换为简体，并完全替换`monsters.json`。
* **更新图片**  
  * **普通版本**  
  在Windows下直接执行`Aria2-获取图片下载列表文件.js`，生成三个下载列表。将[aria2c.exe](https://github.com/aria2/aria2/releases)复制到本项目根目录，然后执行需要更新图片的对应`Aria2下载-XX图片.bat`下载用到的图片。
  * **高级版本**  
  使用[Puzzle & Dragons Texture Tool](https://github.com/Mapaler/Puzzle-and-Dragons-Texture-Tool)解包图片文件。  
  `CARDS_XXX.PNG`图片包含的是怪物头像，需root手机，原始文件在`/data/data/jp.gungho.padHT/files/mon2`  
  其他图片在APK安装包里，并且如果类型和觉醒发生变化，还需要对应的更新css代码。