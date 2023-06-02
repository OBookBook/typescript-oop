/**
 * オブジェクト指向を使用しないジャンケンプログラム
 */
const STONE: number = 0; // グー
const SCISSORS: number = 1; // チョキ
const PAPER: number = 2; // パー
let player1WinCount: number = 0; // プレイヤー1の勝ち数
let player2WinCount: number = 0; // プレイヤー2の勝ち数
let player1Hand: number = 0; // プレイヤー１が出す手
let player2Hand: number = 0; // プレイヤー２が出す手
let randomNum: number = 0; // ジャンケンの手を決めるのに使用する乱数

console.log("【ジャンケン開始】\n");

for (let cnt: number = 0; cnt < 3; cnt++) {
  console.log(`【${cnt + 1}回戦目】`);

  randomNum = Math.random() * 3;

  if (randomNum < 1) {
    player1Hand = STONE;
    console.log("グー");
  } else if (randomNum < 2) {
    player1Hand = SCISSORS;
    console.log("チョキ");
  } else if (randomNum < 3) {
    player1Hand = PAPER;
    console.log("パー");
  }

  console.log(" vs. ");

  randomNum = Math.random() * 3;

  if (randomNum < 1) {
    player2Hand = STONE;
    console.log("グー");
  } else if (randomNum < 2) {
    player2Hand = SCISSORS;
    console.log("チョキ");
  } else if (randomNum < 3) {
    player2Hand = PAPER;
    console.log("パー");
  }

  if (
    (player1Hand === STONE && player2Hand === SCISSORS) ||
    (player1Hand === SCISSORS && player2Hand === PAPER) ||
    (player1Hand === PAPER && player2Hand === STONE)
  ) {
    console.log("\nプレイヤー１が勝ちました！\n");
    player1WinCount++;
  } else if (
    (player1Hand === STONE && player2Hand === PAPER) ||
    (player1Hand === SCISSORS && player2Hand === STONE) ||
    (player1Hand === PAPER && player2Hand === SCISSORS)
  ) {
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
} else if (player1WinCount === player2WinCount) {
  console.log(`${player1WinCount}対${player2WinCount} で引き分けです！\n`);
}
