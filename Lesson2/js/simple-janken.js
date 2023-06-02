/**
 * オブジェクト指向を使用しないジャンケンプログラム
 */
var STONE = 0; // グー
var SCISSORS = 1; // チョキ
var PAPER = 2; // パー
var player1WinCount = 0; // プレイヤー1の勝ち数
var player2WinCount = 0; // プレイヤー2の勝ち数
var player1Hand = 0; // プレイヤー１が出す手
var player2Hand = 0; // プレイヤー２が出す手
var randomNum = 0; // ジャンケンの手を決めるのに使用する乱数
console.log("【ジャンケン開始】\n");
for (var cnt = 0; cnt < 3; cnt++) {
    console.log("\u3010".concat(cnt + 1, "\u56DE\u6226\u76EE\u3011"));
    randomNum = Math.random() * 3;
    if (randomNum < 1) {
        player1Hand = STONE;
        console.log("グー");
    }
    else if (randomNum < 2) {
        player1Hand = SCISSORS;
        console.log("チョキ");
    }
    else if (randomNum < 3) {
        player1Hand = PAPER;
        console.log("パー");
    }
    console.log(" vs. ");
    randomNum = Math.random() * 3;
    if (randomNum < 1) {
        player2Hand = STONE;
        console.log("グー");
    }
    else if (randomNum < 2) {
        player2Hand = SCISSORS;
        console.log("チョキ");
    }
    else if (randomNum < 3) {
        player2Hand = PAPER;
        console.log("パー");
    }
    if ((player1Hand === STONE && player2Hand === SCISSORS) ||
        (player1Hand === SCISSORS && player2Hand === PAPER) ||
        (player1Hand === PAPER && player2Hand === STONE)) {
        console.log("\nプレイヤー１が勝ちました！\n");
        player1WinCount++;
    }
    else if ((player1Hand === STONE && player2Hand === PAPER) ||
        (player1Hand === SCISSORS && player2Hand === STONE) ||
        (player1Hand === PAPER && player2Hand === SCISSORS)) {
        console.log("\nプレイヤー２が勝ちました！\n");
        player2WinCount++;
    }
    else {
        console.log("\n引き分けです！\n");
    }
}
console.log("【ジャンケン終了】\n");
if (player1WinCount > player2WinCount) {
    console.log("".concat(player1WinCount, "\u5BFE").concat(player2WinCount, "\u3067\u30D7\u30EC\u30A4\u30E4\u30FC\uFF11\u306E\u52DD\u3061\u3067\u3059\uFF01\n"));
}
else if (player1WinCount < player2WinCount) {
    console.log("".concat(player1WinCount, "\u5BFE").concat(player2WinCount, "\u3067\u30D7\u30EC\u30A4\u30E4\u30FC\uFF12\u306E\u52DD\u3061\u3067\u3059\uFF01\n"));
}
else if (player1WinCount === player2WinCount) {
    console.log("".concat(player1WinCount, "\u5BFE").concat(player2WinCount, " \u3067\u5F15\u304D\u5206\u3051\u3067\u3059\uFF01\n"));
}
