// Gistのdata-color-mode属性をdarkに変更するスクリプト
(function() {
    // Gistが読み込まれるまで待機する関数
    function waitForGist() {
        const gistFiles = document.querySelectorAll('.gist-file[data-color-mode="light"]');

        if (gistFiles.length > 0) {
            // data-color-mode属性をdarkに変更
            gistFiles.forEach(function(gistFile) {
                gistFile.setAttribute('data-color-mode', 'dark');
            });
        }
    }

    // DOMが読み込まれた後に実行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForGist);
    } else {
        waitForGist();
    }

    // Gistが動的に読み込まれる場合に備えて、定期的にチェック
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        const gistFiles = node.querySelectorAll ?
                            node.querySelectorAll('.gist-file[data-color-mode="light"]') : [];

                        gistFiles.forEach(function(gistFile) {
                            gistFile.setAttribute('data-color-mode', 'dark');
                        });

                        // ノード自体がgist-fileの場合
                        if (node.classList && node.classList.contains('gist-file') &&
                            node.getAttribute('data-color-mode') === 'light') {
                            node.setAttribute('data-color-mode', 'dark');
                        }
                    }
                });
            }
        });
    });

    // ドキュメント全体を監視
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
