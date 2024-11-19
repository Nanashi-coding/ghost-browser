// URLをiFrameにロードする関数
function loadUrl() {
    var url = document.getElementById('url-input').value;
    if (url) {
        // URLがhttpで始まらない場合、https://を付け加える
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        document.getElementById('iframe').src = url;
    }
}

// 作成途中のメッセージを表示する関数
function showComingSoon() {
    document.getElementById('coming-soon').style.display = 'block';
    setTimeout(function() {
        document.getElementById('coming-soon').style.display = 'none';
    }, 3000); // 3秒後に非表示にする
}
