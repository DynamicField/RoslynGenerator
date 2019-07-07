var emojis = ["👾", "🐧", "👏", "👩‍💻"];
var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
document.getElementById("loadingEmoji").textContent = randomEmoji;
window.monacoEvents = {
    onChange: function (id) {
        var editor = window.Blazaco.Editors.find(e => e.id === id);
        editor.editor.onDidChangeModelContent(() => DotNet.invokeMethod("RoslynGenerator", "InvokeTextChanged", id));
    }
}