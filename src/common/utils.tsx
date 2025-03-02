import { baiduErrno } from "@/baidu/common/const";
import { appError, FileInfo, TAG } from "./const";
import { DuParser } from "./duParser";

/**
 * @description: 弹出一个文本提示框
 * @param {string} text
 */
export function showAlert(text: string): void {
  alert(`${TAG}:\n${text}`);
}

/**
 * @description: md5随机大小写
 * @param {string} string
 * @return {string}
 */
export function randomStringTransform(string: string): string {
  const tempString = [];
  for (let i of string) {
    if (!Math.round(Math.random())) {
      tempString.push(i.toLowerCase());
    } else {
      tempString.push(i.toUpperCase());
    }
  }
  return tempString.join("");
}

/**
 * @description: 解析文件信息, 返回转存结果列表html, 秒传链接, 失败文件个数, 成功的文件信息列表
 * @param {Array} fileInfoList 文件信息数据列表
 * @param {Boolean} checkMode 是否为测试模式, 若为是则忽略转存失败
 */
export function parsefileInfo(
  fileInfoList: Array<FileInfo>,
  checkMode: Boolean = false
) {
  let bdcode = "";
  let successInfo = "";
  let failedInfo = "";
  let failedCount = 0;
  let successList = [];
  fileInfoList.forEach((item) => {
    if (0 === item.errno || undefined === item.errno) {
      successInfo += `<p>文件：${item.path}</p>`;
      bdcode += `${item.md5}${item.md5s && "#" + item.md5s}#${item.size}#${
        item.path
      }\n`;
      successList.push(item);
    } else {
      failedCount++;
      failedInfo += `<p>文件：${item.path}</p><p>失败原因：${baiduErrno(
        item.errno
      )}(#${item.errno})</p>`;
      if (checkMode)
        bdcode += `${item.md5}${item.md5s && "#" + item.md5s}#${item.size}#${
          item.path
        }\n`; // 测试模式下不再排除测试失败文件的秒传数据
    }
  });
  if (failedInfo)
    failedInfo = `<details class="mzf_details"><summary><svg width="16" height="7"><polyline points="0,0 8,7 16,0"/></svg><b>失败文件列表(点击展开):</b></summary></details><div class="mzf_content">${failedInfo}</div>`;
  if (successInfo)
    successInfo = `<details class="mzf_details"><summary><svg width="16" height="7"><polyline points="0,0 8,7 16,0"/></svg><b>成功文件列表(点击展开):</b></summary></details><div class="mzf_content">${successInfo}</div>`;
  bdcode = bdcode.trim();
  return {
    htmlInfo:
      successInfo && failedInfo
        ? successInfo + "<p><br /></p>" + failedInfo
        : successInfo + failedInfo,
    failedCount: failedCount,
    bdcode: bdcode,
    successList: successList,
  };
}

/**
 * @description: 获取选择的文件列表(旧版界面)
 */
export function getSelectedFileListLegacy() {
  return unsafeWindow
    .require("system-core:context/context.js")
    .instanceForSystem.list.getSelected();
}

/**
 * @description: 获取选择的文件列表(新版界面)
 * 我从这里抄的, 谢谢你: https://greasyfork.org/zh-CN/scripts/436446
 */
export function getSelectedFileListNew() {
  return document.querySelector(".nd-main-list, .nd-new-main-list").__vue__
    .selectedList;
}

/**
 * @description: 将data键值对转换为query字符串
 * @param {any} data
 * @return {string} query
 */
export function convertData(data: any): string {
  let query = "";
  for (let key in data) query += `&${key}=${encodeURIComponent(data[key])}`;
  return query;
}

/**
 * @description: 从剪贴板获取字符串数据
 * @return {string} bdlink
 */
export async function parseClipboard(): Promise<string> {
  try {
    let bdlink = await navigator.clipboard.readText();
    if (!DuParser.parse(bdlink).length) return "";
    return bdlink;
  } catch (error) {
    showAlert(appError.ClipboardPremissionErr);
    return "";
  }
}

/**
 * @description: 解密已加密的md5
 * @param {string} md5 (加密)
 * @return {string} md5 (解密)
 */
export function decryptMd5(md5: string): string {
  if (
    !(
      (parseInt(md5[9]) >= 0 && parseInt(md5[9]) <= 9) ||
      (md5[9] >= "a" && md5[9] <= "f")
    )
  )
    return decrypt(md5);
  else return md5;

  function decrypt(encryptMd5: string) {
    let key = (encryptMd5[9].charCodeAt(0) - "g".charCodeAt(0)).toString(16);
    let key2 = encryptMd5.substr(0, 9) + key + encryptMd5.substr(10);
    let key3 = "";
    for (let a = 0; a < key2.length; a++)
      key3 += (parseInt(key2[a], 16) ^ (15 & a)).toString(16);
    let md5 =
      key3.substr(8, 8) +
      key3.substr(0, 8) +
      key3.substr(24, 8) +
      key3.substr(16, 8);
    return md5;
  }
}
