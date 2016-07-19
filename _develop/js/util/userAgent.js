const UA = {
      isSp         : false,
      isIOS        : false,
      isAndroid    : false,
      isTablet     : false,
      isIE         : false,
      device       : "",
      _DEVICE_LIST : [
        "iPhone",
        "iPod",
        "iPad",
        "Android Movile",
        "Android Tablet",
        "PC",
      ]
    };

const ua = navigator.userAgent.toLowerCase();

if (/iphone|ipod|ipad/.test(ua)) {
  UA.isIOS = true;
  UA.isSp  = true;

  if (/iphone/.test(ua)) {
    UA.device = UA._DEVICE_LIST[0]; // "iPhone";
  } else if (/ipad/.test(ua)) {
    UA.isTablet = true;
    UA.device = UA._DEVICE_LIST[2]; // "iPad";
  } else if (/ipod/.test(ua)) {
    UA.device = UA._DEVICE_LIST[1]; // "iPod";
  }
} else if (/android/.test(ua)) {
  UA.isAndroid = true;
  UA.isSp  = true;

  if (/mobile/.test(ua)) {
    UA.device = UA._DEVICE_LIST[3]; // "Android Mobile";
  } else {
    UA.isTablet = true;
    UA.device = UA._DEVICE_LIST[4]; // "Android Tablet";
  }
} else if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
    UA.device = UA._DEVICE_LIST[5]; // "IE";
    UA.isIE = true;
}

export default UA;
