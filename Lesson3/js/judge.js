class Judge {
  /**
   * ジャンケンを開始する。
   * @param {Player} player1 プレイヤー1
   * @param {Player} player2 プレイヤー2
   */
  startJanken(player1, player2) {
    console.log("【ジャンケン開始】\n");
    for (let cnt = 0; cnt < 3; cnt++) {
      console.log(`【${cnt + 1}回戦目】`);
      const winner = this.judgeJanken(player1, player2);
      if (winner !== null) {
        console.log(`\n${winner.getName()}が勝ちました!\n`);
        winner.notifyResult(true);
      } else {
        console.log("\n引き分けです！\n");
      }
    }
    console.log("【ジャンケン終了】\n");
    const finalWinner = this.judgeFinalWinner(player1, player2);
    console.log(`${player1.getWinCount()} 対 ${player2.getWinCount()}で`);
    if (finalWinner !== null) {
      console.log(`${finalWinner.getName()}の勝ちです！\n`);
    } else {
      console.log("引き分けです！\n");
    }
  }

  /**
   * ジャンケンの勝敗を判定する。
   * @param {Player} player1 プレイヤー1
   * @param {Player} player2 プレイヤー2
   * @returns {Player | null} 勝者のプレイヤーインスタンス（引き分けの場合はnull）
   */
  judgeJanken(player1, player2) {
    let winner = null;
    const player1hand = player1.showHand();
    const player2hand = player2.showHand();
    this.printHand(player1hand);
    console.log(" vs. ");
    this.printHand(player2hand);
    console.log(player2hand);
    if (
      (player1hand === Player.STONE && player2hand === Player.SCISSORS) ||
      (player1hand === Player.SCISSORS && player2hand === Player.PAPER) ||
      (player1hand === Player.PAPER && player2hand === Player.STONE)
    ) {
      winner = player1;
    } else if (
      (player1hand === Player.STONE && player2hand === Player.PAPER) ||
      (player1hand === Player.SCISSORS && player2hand === Player.STONE) ||
      (player1hand === Player.PAPER && player2hand === Player.SCISSORS)
    ) {
      winner = player2;
    }
    return winner;
  }

  /**
   * 最終的な勝者を判定する。
   * @param {Player} player1 プレイヤー1
   * @param {Player} player2 プレイヤー2
   * @returns {Player | null} 最終的な勝者のプレイヤーインスタンス（引き分けの場合はnull）
   */
  judgeFinalWinner(player1, player2) {
    let winner = null;
    const player1WinCount = player1.getWinCount();
    const player2WinCount = player2.getWinCount();
    if (player1WinCount > player2WinCount) {
      winner = player1;
    } else if (player1WinCount < player2WinCount) {
      winner = player2;
    }
    return winner;
  }

  /**
   * ジャンケンの手を表示する。
   * @param {number} hand 手の数値
   */
  printHand(hand) {
    switch (hand) {
      case Player.STONE:
        console.log("グー");
        break;
      case Player.SCISSORS:
        console.log("チョキ");
        break;
      case Player.PAPER:
        console.log("パー");
        break;
      default:
        break;
    }
  }
}
