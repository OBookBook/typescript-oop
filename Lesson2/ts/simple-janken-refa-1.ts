const STONE = 0; // グー
const SCISSORS = 1; // チョキ
const PAPER = 2; // パー

let player1WinCount = 0; // プレイヤー１の勝ち数
let player2WinCount = 0; // プレイヤー２の勝ち数

console.log("【ジャンケン開始】\n");

for (let cnt = 0; cnt < 3; cnt++) {
  console.log(`【${cnt + 1}回戦目】`);

  let player1Hand = getRandomHand();
  let player2Hand = getRandomHand();

  console.log(getHandName(player1Hand));
  console.log(" vs. ");
  console.log(getHandName(player2Hand));

  let result = getWinner(player1Hand, player2Hand);

  if (result === 1) {
    console.log("\nプレイヤー１が勝ちました！\n");
    player1WinCount++;
  } else if (result === 2) {
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

/**
 * ランダムな手を取得する関数
 * @returns {number} ランダムな手の値
 */
function getRandomHand(): number {
  return Math.floor(Math.random() * 3);
}

/**
 * 手の値から手の名前を取得する関数
 * @param {number} hand - 手の値
 * @returns {string} 手の名前
 */
function getHandName(hand: number): string {
  switch (hand) {
    case STONE:
      return "グー";
    case SCISSORS:
      return "チョキ";
    case PAPER:
      return "パー";
    default:
      throw new Error("無効な手の値です。");
  }
}

/**
 * 勝者を判定する関数
 * @param {number} player1Hand - プレイヤー１の手の値
 * @param {number} player2Hand - プレイヤー２の手の値
 * @returns {number} 勝者の番号 (1: プレイヤー１, 2: プレイヤー２, 0: 引き分け)
 */
function getWinner(player1Hand: number, player2Hand: number): number {
  if (
    (player1Hand === STONE && player2Hand === SCISSORS) ||
    (player1Hand === SCISSORS && player2Hand === PAPER) ||
    (player1Hand === PAPER && player2Hand === STONE)
  ) {
    return 1; // プレイヤー１の勝利
  } else if (
    (player1Hand === STONE && player2Hand === PAPER) ||
    (player1Hand === SCISSORS && player2Hand === STONE) ||
    (player1Hand === PAPER && player2Hand === SCISSORS)
  ) {
    return 2; // プレイヤー２の勝利
  } else {
    return 0; // 引き分け
  }
}
