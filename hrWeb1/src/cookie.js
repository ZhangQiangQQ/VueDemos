export function CodeToTag(codeArr, list, Alias){
  /*
  * codeArr{
  *   type:array,
  *   作用:将需要匹配的code从父到子按顺序放入数组中
  *   例如： ['省','市']=>[310000,310104]
  * }
  * list{
  *   type:array,
  *   作用:数据匹配源，必须是数组，且必须是嵌套接口，children中是子元素节点
  *   例如：
  *    {
          children: [{code: 110101, tag: "东城区", parent: 110000, level: 2},…]
          code: 110000
          level: 1
          parent: 0
          tag: "北京市"
        }
  * }
  * Alias{
  *   type:Object,
  *   作用:更改目标匹配字段的别名，可不填
  *   例如：
  *    (默认)：
       {
          targetCode:code,
          targetTag:tag,
       }
       (可修改为)：
       {
          targetCode:value,
          targetTag:label,
       }
  * }
  *
  * */
  let defaultTarget = {
    targetCode: 'code',
    targetTag: 'tag',
  };
  if (!(Array.isArray(codeArr) && Array.isArray(list))) {
    throw new Error('codeArr&list must be Array!');
  }
  if (Alias) {
    if (Alias.constructor === Object) {
      defaultTarget = Object.assign(defaultTarget, Alias);
    } else {
      throw new Error('Alias must be Object!');
    }
  }
  const tagArr = [];
  const { targetCode, targetTag } = defaultTarget;
  const getTag = (itemCode, itemList) => {
    const targetList = itemList.filter(item => item[targetCode] === itemCode)[0];
    if (targetList) {
      tagArr.push(targetList[targetTag]);
      if (targetList.children && targetList.children.length > 0) {
        getTag(codeArr[tagArr.length], targetList.children);
      }
    }
  };
  getTag(codeArr[tagArr.length], list);
  return tagArr;
}

  
  // export function getCookie(objName){//获取指定名称的cookie的值
  //   var arrStr = document.cookie.split("; ");
  //   for (var i = 0; i < arrStr.length; i++) {
  //     var temp = arrStr[i].split("=");
  //     if (temp[0] == objName)
  //       return unescape(temp[1]);
  //   }
  //   alert("cookie成功");
  //   this.$store.state.cookie = temp[1];
  // }
  
  // export function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
  //   var date = new Date();
  //   date.setTime(date.getTime() - 10000);
  //   document.cookie = name + "=a; expires=" + date.toGMTString();
  // }
  
  // function allCookie(){//读取所有保存的cookie字符串
  //   var str = document.cookie;
  //   if (str == "") {
  //     str = "没有保存任何cookie";
  //   }
  //   alert(str);
  // }
