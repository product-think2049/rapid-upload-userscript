import { doc, doc2, linkStyle } from "@/common/const";
import Swalbase from "@/common/swalBase";
import GeneratebdlinkTask from "./GeneratebdlinkTask";
import RapiduploadTask from "./RapiduploadTask";

const host = location.host;
export const rapid_url = `https://${host}/api/rapidupload`;
export const create_url = `https://${host}/rest/2.0/xpan/file?method=create`;
export const precreate_url = `https://${host}/rest/2.0/xpan/file?method=precreate`;
export const list_url = `https://${host}/rest/2.0/xpan/multimedia?method=listall&order=name&limit=10000`;
// 已知api有限制: limit字段(即获取的文件数)不能大于10000, 否则直接返回错误
export const meta_url2 = `https://${host}/rest/2.0/xpan/multimedia?method=filemetas&dlink=1&fsids=`;
export const pcs_url =
  "https://pcs.baidu.com/rest/2.0/pcs/file?app_id=778750&method=download";
export const illegalPathPattern = /[\\":*?<>|]/; // 匹配路径中的非法字符
export var getBdstoken: () => string; // 获取bdstoken的实现
export function setGetBdstoken(func: () => string) {
  getBdstoken = func;
}
export var refreshList: () => void; // 刷新文件列表的实现
export function setRefreshList(func: () => void) {
  refreshList = func;
}
export var getSelectedFileList: () => any; // 获取选中的文件列表的实现
export function setGetSelectedFileList(func: () => any) {
  getSelectedFileList = func;
}
export const swalInstance = new Swalbase(
  new RapiduploadTask(),
  new GeneratebdlinkTask()
);

export const htmlTagNew = "div.nd-file-list-toolbar__actions"; // 新版界面秒传按钮的html父对象
export const htmlTagNew2 = "div.wp-s-agile-tool-bar__header"; // 22.5.24: 新版界面新增的一个父对象
export const htmlTagLegacy = "div.tcuLAu"; // 旧版界面秒传按钮的html父对象
export const htmlBtnRapidNew = // 新版界面秒传按钮的html元素
  '<button id="bdlink_btn" style="margin-left: 8px;" class="mzf_new_btn"></i><span>秒传</span></button>';
export const htmlBtnGenNew = // 新版界面秒传生成按钮的html元素
  '<button id="gen_bdlink_btn" style="margin-left: 8px;" class="mzf_new_btn"></i><span>生成秒传</span></button>';
export const htmlBtnRapidLegacy = // 旧版界面秒传按钮的html元素
  '<a class="g-button g-button-blue" id="bdlink_btn" title="秒传链接" style="display: inline-block;""><span class="g-button-right"><em class="icon icon-disk" title="秒传链接提取"></em><span class="text" style="width: auto;">秒传链接</span></span></a>';
export const htmlBtnGenLegacy = // 旧版界面秒传生成按钮的html元素
  '<a class="g-button" id="gen_bdlink_btn"><span class="g-button-right"><em class="icon icon-share"></em><span class="text" style="width: auto;">生成秒传</span></span></a>';

export function baiduErrno(errno: number) {
  switch (errno) {
    case -6:
      return `认证失败(参考文档:<a href="${doc.shareDoc}#认证失败-6" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#认证失败-6" ${linkStyle}>载点2</a>)`;
    case -7:
      return "秒传链接内的文件名/转存路径 包含非法字符, 请尝试更改";
    case -8:
      return "路径下存在同名文件";
    case 400:
      return `请求错误(参考文档:<a href="${doc.shareDoc}#请求错误-400" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#请求错误-400" ${linkStyle}>载点2</a>)`;
    case 403:
      return `接口限制访问(参考文档:<a href="${doc.shareDoc}#接口限制访问-403" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#接口限制访问-403" ${linkStyle}>载点2</a>)`;
    case 404:
      return `秒传未生效(参考文档:<a href="${doc.shareDoc}#秒传未生效-404" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#秒传未生效-404" ${linkStyle}>载点2</a>)`;
    case 114:
      return `转存失败-v2接口(参考文档:<a href="${doc.shareDoc}#转存失败-v2接口-114" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#转存失败-v2接口-114" ${linkStyle}>载点2</a>)`;
    case 514:
      return `请求失败(参考文档:<a href="${doc.shareDoc}#请求失败-514" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#请求失败-514" ${linkStyle}>载点2</a>)`;
    case 1919:
      return `文件已被和谐(参考文档:<a href="${doc.shareDoc}#文件已被和谐-1919" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#文件已被和谐-1919" ${linkStyle}>载点2</a>)`;
    case 810:
      return '秒传链接内的文件名错误, 不能含有字符\\":*?<>|, 且不能是"/"(空文件名)';
    case 996:
      return `md5获取失败(参考文档:<a href="${doc.shareDoc}#md5-获取失败-996" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#md5-获取失败-996" ${linkStyle}>载点2</a>)`;
    case 2:
      return `转存失败-v1接口(参考文档:<a href="${doc.shareDoc}#转存失败-v1接口-2" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#转存失败-v1接口-2" ${linkStyle}>载点2</a>)`;
    case -10:
      return "网盘容量已满";
    case 500:
    case 502:
    case 503:
      return `服务器错误(参考文档:<a href="${doc.shareDoc}#服务器错误-502-503" ${linkStyle}>载点1</a> <a href="${doc2.shareDoc}#服务器错误-502-503" ${linkStyle}>载点2</a>)`;
    case 909:
      return "路径不存在/云端文件已损坏";
    case 900:
      return "路径为文件夹, 不支持生成秒传";
    case 901:
      return "包含的文件数量超出限制(1w个)";
    default:
      return "未知错误";
  }
} // 自定义百度api返回errno的报错

export const retryMax_apiV2 = 2; // v2转存接口的最大重试次数
