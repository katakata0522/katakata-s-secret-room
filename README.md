# かたかたの秘密基地

公開用の正本はルートの `index.html` です。

## 運用ルール

- `index.html` 以外へ同一HTMLを複製しない
- 修正は必ず `index.html` に対して行う
- 画像・音声・遷移先は、実在と利用条件を確認してから追加する
- 著作権や参照先が不明なダミー素材を正式素材として扱わない

## 現在の未解決項目

`index.html` には、まだ次のダミー参照があります。

- `dummy-sound.mp3`
- `dummy_game1_pixel.png`
- `dummy_game2_pastel.png`
- `dummy_game3_retro.png`
- `dummy_game_url_1.html`
- `dummy_game_url_2.html`
- `dummy_game_url_3.html`

これらは正式な画像・音声・リンク先が確定するまで、推測で差し替えません。

## 対応済み

- 掲示板投稿のHTML特殊文字をエスケープ
- 壊れたlocalStorageデータで画面全体が停止しないよう検証を追加
- 完全に同一内容だった重複HTMLを削除し、`index.html`へ正本を統一
