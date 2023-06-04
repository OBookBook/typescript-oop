/**
 * ジャンケンの審判を表すクラス。
 */
class Judge {
  startJanken(player1: Player, player2: Player): void {
    console.log("【ジャンケン開始】\n");
    for (let cnt = 0; cnt < 3; cnt++) {
      console.log(`【${cnt + 1}回戦目】`);
      const winner: Player | null = this.judgeJanken(player1, player2);
      if (winner !== null) {
        console.log(`\n${winner.getName()}が勝ちました!\n`);
        winner.notifyResult(true);
      } else {
        console.log("\n引き分けです！\n");
      }
    }
    console.log("【ジャンケン終了】\n");
    const finalWinner: Player | null = this.judgeFinalWinner(player1, player2);
    console.log(
      `${player1.getWinCount()} 対 ${player2.getWinCount()}で`
    );
    if (finalWinner !== null) {
      console.log(`${finalWinner.getName()}の勝ちです！\n`);
    } else {
      console.log("引き分けです！\n");
    }
  }

  private judgeJanken(player1: Player, player2: Player): Player | null {
    let winner: Player | null = null;
    const player1hand: number = player1.showHand();
    const player2hand: number = player2.showHand();
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

  private judgeFinalWinner(player1: Player, player2: Player): Player | null {
    let winner: Player | null = null;
    const player1WinCount: number = player1.getWinCount();
    const player2WinCount: number = player2.getWinCount();
    if (player1WinCount > player2WinCount) {
      winner = player1;
    } else if (player1WinCount < player2WinCount) {
      winner = player2;
    }
    return winner;
  }

  private printHand(hand: number): void {
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
