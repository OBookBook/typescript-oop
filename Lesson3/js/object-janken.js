class objectJanken {
  constructor() {
    const saito = new Judge(); // 審判（斎藤さん）のインスタンス生成
    const murata = new Player("村田さん");// プレイヤー１（村田さん）の生成
    const yamada = new Player("山田さん");// プレイヤー２（山田さん）の生成
    saito.startJanken(murata, yamada);// 村田さんと山田さんをプレイヤーとしてジャンケンを開始する
  }
}

const obj = new objectJanken();
