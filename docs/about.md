# About

## これ何?

これは管理人が競技プログラミングやCTFでよく使うコード片 (Snippet) を集めたものです.

`VuePress` という静的サイトジェネレータを使ってドキュメントを作成し,
`GitHub Pages` という GitHub が提供するホスティングサービスを使ってページを公開しています.

## 使い方

管理人は [UltiSnips](https://github.com/SirVer/ultisnips) という Vim Plugin を使って, Vim から Snippet を呼び出して使用しています.

UltiSnips のスニペットファイルは拡張子ごとに異なっていて,
適当なファイルを Vim  で開いて `:UltiSnipsEdit` を実行すると編集出来ます.
(もちろん Vim コマンドラインを使わずに直接編集することもできます)

このサイトに掲載されている Snippet を UltiSnips で使える形式のスニペットファイルにしたものが以下のファイルです.

* [~/.vim/UltiSnips/cpp.snippets](https://github.com/kira924age/MyCodeSnippets/blob/main/.vim/UltiSnips/cpp.snippets)
* [~/.vim/UltiSnips/python.snippets](https://github.com/kira924age/MyCodeSnippets/blob/main/.vim/UltiSnips/python.snippets)

UltiSnips を Install して, 上記のスニペットファイルを適切なディレクトリに配置した上で,
Vim で適当なファイルを開き, Snippet 名を入力して Tab key を押すと, Snippet が展開されます.
Snippet 名は関数名や構造体・クラス名と同じ文字列を設定しています.

## 間違えについて

コードや説明に誤りを見つけた場合, 些細なものであっても教えてくれると嬉しいです.

* 連絡先: `$(whoami)@gmail.com`
    * `$(whoami)` を管理人の handle name で置換してください

