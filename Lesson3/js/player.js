class Player {
  static STONE = 0; // グー
  static SCISSORS = 1; // チョキ
  static PAPER = 2; // パー

  /**
   * コンストラクタ
   * @param {string} name プレイヤーの名前
   */
  constructor(name) {
    this.name = name;
    this.winCount = 0;
  }

  /**
   * ジャンケンの手を出す。
   * @returns {number} ジャンケンの手
   */
  showHand() {
    let hand = 0; // プレイヤーの手
    const randomNum = Math.random() * 3; // 0.0以上3.0未満の小数として乱数を得る
    if (randomNum < 1) {
      hand = Player.STONE; // randomNum が 0.0以上1.0未満の場合、グー
    } else if (randomNum < 2) {
      hand = Player.SCISSORS; // randomNum が 1.0以上2.0未満の場合、チョキ
    } else if (randomNum < 3) {
      hand = Player.PAPER; // randomNum が 2.0以上3.0未満の場合、パー
    }
    return hand; // 決定した手を戻り値として返す
  }

  /**
   * 審判から勝敗を聞く。
   * @param {boolean} result true:勝ち,false:負け
   * @returns {void}
   */
  notifyResult(result) {
    if (true === result) {
      this.winCount += 1; // 勝った場合は勝ち数を加算する
    }
  }

  /**
   * 自分の勝った回数を答える。
   * @returns {number} 勝った回数
   */
  getWinCount() {
    return this.winCount;
  }

  /**
   * 自分の名前を答える
   * @returns {string} 名前
   */
  getName() {
    return this.name;
  }
}
