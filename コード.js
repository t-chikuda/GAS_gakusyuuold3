/**
 * 初期表示の関数です
 */
function doGet(e) {
  let page = e.parameter.page;
  if (!page) {
    page = 'index';
  }
  return HtmlService.createTemplateFromFile(page).evaluate(); 
}

/**
 * 画面遷移処理の関数です
 */
function screenTransition() {
  return ScriptApp.getService().getUrl();
}