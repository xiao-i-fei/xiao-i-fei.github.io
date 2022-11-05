/**
 * @author XiaoFei
 * @email: 1903078434@qq.com
 * @date: 2022/11/4
 */
//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(/img/1515952743754.png)",
    "url(/img/1515952743758.png)",
    "url(/img/1515952743772.jpg)",
    "url(/img/1515952743787.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.floor(Math.random() * backimg.length);
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg =[
    "url(/img/1515952743754.png)",
    "url(/img/1515952743758.png)",
    "url(/img/1515952743772.jpg)",
    "url(/img/1515952743787.jpg)"
];
//获取banner图片总数，生成随机数
var bannerindex =Math.floor(Math.random() * bannerimg.length);
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];