const BaseURL = 'http://192.168.1.6/yinshangImgs/'

export const getImg = function (img_name) {// 获取图片在三端上不同的路径
    let platform = weex.config.env.platform
    let img_path = BaseURL + img_name
    // if (platform == 'Web') {
    //     img_path = `src/images/${img_name}`
    // } else if (platform == 'android') { //android 不需要后缀
    //     img_name = img_name.substr(0, img_name.lastIndexOf('.'));
    //     img_path = `local:///${img_name}`
    // } else {
    //     img_path = `local:///${img_name}` // img_path = `../images/${img_name}`
    // }
    return img_path
}

//导出接口
export default {
    getImg: getImg,
}