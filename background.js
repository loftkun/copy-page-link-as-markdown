var browser = browser||chrome;

browser.contextMenus.create({
  id: 'copy page link as markdown',
  title: 'copy page link as markdown',
  contexts: ['page'],
    onclick: (info, tab)=>{
        var url = tab.url;
        var title = tab.title;
        var markdown = '[' + title + '](' + url + ')';
        toClipBoard(markdown);

        function toClipBoard(text){
          var ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "0";
          ta.style.top = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.parentElement.removeChild(ta);
        }
  }
});
