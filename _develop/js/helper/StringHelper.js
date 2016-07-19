export default class StringHelper {
  static processEscape(str) {
    str = str.replace(/[\\]/g, "\\\\");
    str = str.replace(/[\b]/g, "\\b");
    str = str.replace(/[\f]/g, "\\f");
    str = str.replace(/[\n]/g, "\\n");
    str = str.replace(/[\r]/g, "\\r");
    str = str.replace(/[\t]/g, "\\t");
    str = str.replace(/[\v]/g, "\\v");
    str = str.replace(/[\']/g, "\\'");
    str = str.replace(/[\"]/g, '\\"');
    str = str.replace(/[\/]/g, "\\/");

    return str;
  }
}
