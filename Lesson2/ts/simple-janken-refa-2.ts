const Hands = {
  STONE: 0, // グー
  SCISSORS: 1,// チョキ
  PAPER: 2, // パー
};

/**
 * ランダムな手を取得する関数
 * @returns {number} ランダムな手の値
 */
function getRandomHand(): number {
  return Math.floor(Math.random() * Object.keys(Hands).length);
}

/**
 * 手の値から手の名前を取得する関数
 * @param {number} hand - 手の値
 * @returns {string} 手の名前
 */
function getHandName(hand: number): string {
  return Object.keys(Hands).find((key) => Hands[key] === hand)!;
}

/**
 * 勝者を判定する関数
 * @param {number} player1Hand - プレイヤー１の手の値
 * @param {number} player2Hand - プレイヤー２の手の値
 * @returns {number} 勝者の番号 (1: プレイヤー１, 2: プレイヤー２, 0: 引き分け)
 */
function getWinner(player1Hand: number, player2Hand: number): number {
  if (
    (player1Hand === Hands.STONE && player2Hand === Hands.SCISSORS) ||
    (player1Hand === Hands.SCISSORS && player2Hand === Hands.PAPER) ||
    (player1Hand === Hands.PAPER && player2Hand === Hands.STONE)
  ) {
    return 1; // プレイヤー１の勝利
  } else if (
    (player1Hand === Hands.STONE && player2Hand === Hands.PAPER) ||
    (player1Hand === Hands.SCISSORS && player2Hand === Hands.STONE) ||
    (player1Hand === Hands.PAPER && player2Hand === Hands.SCISSORS)
  ) {
    return 2; // プレイヤー２の勝利
  } else {
    return 0; // 引き分け
  }
}

/**
 * ジャンケンを実行する関数
 */
function playJanken(): void {
  let player1WinCount = 0;
  let player2WinCount = 0;

  console.log("【ジャンケン開始】\n");

  for (let cnt = 0; cnt < 3; cnt++) {
    console.log(`【${cnt + 1}回戦目】`);

    const player1Hand = getRandomHand();
    const player2Hand = getRandomHand();

    console.log(`${getHandName(player1Hand)} vs. ${getHandName(player2Hand)}`);

    const winner = getWinner(player1Hand, player2Hand);

    if (winner === 1) {
      console.log("\nプレイヤー１が勝ちました！\n");
      player1WinCount++;
    } else if (winner === 2) {
      console.log("\nプレイヤー２が勝ちました！\n");
      player2WinCount++;
    } else {
      console.log("\n引き分けです！\n");
    }
  }

  console.log("【ジャンケン終了】\n");

  if (player1WinCount > player2WinCount) {
    console.log(`${player1WinCount}対${player2WinCount}でプレイヤー１の勝ちです！\n`);
  } else if (player1WinCount < player2WinCount) {
    console.log(`${player1WinCount}対${player2WinCount}でプレイヤー２の勝ちです！\n`);
  } else {
    console.log(`${player1WinCount}対${player2WinCount}で引き分けです！\n`);
  }
}

playJanken();
