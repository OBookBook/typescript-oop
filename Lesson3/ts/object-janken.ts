/**
 * オブジェクト指向によるジャンケンプログラム
 */
class ObjectJanken {
  static main(): void {
    const saito: Judge = new Judge(); // 審判（斎藤さん）のインスタンス生成
    const murata: Player = new Player("村田さん");// プレイヤー１（村田さん）の生成
    const yamada: Player = new Player("山田さん");// プレイヤー２（山田さん）の生成
    saito.startJanken(murata, yamada);// 村田さんと山田さんをプレイヤーとしてジャンケンを開始する
  }
}

// メイン関数の呼び出し
ObjectJanken.main();
