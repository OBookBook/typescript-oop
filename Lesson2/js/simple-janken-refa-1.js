var STONE = 0; // グー
var SCISSORS = 1; // チョキ
var PAPER = 2; // パー
var player1WinCount = 0; // プレイヤー１の勝ち数
var player2WinCount = 0; // プレイヤー２の勝ち数
console.log("【ジャンケン開始】\n");
for (var cnt = 0; cnt < 3; cnt++) {
    console.log("\u3010".concat(cnt + 1, "\u56DE\u6226\u76EE\u3011"));
    var player1Hand = getRandomHand();
    var player2Hand = getRandomHand();
    console.log(getHandName(player1Hand));
    console.log(" vs. ");
    console.log(getHandName(player2Hand));
    var result = getWinner(player1Hand, player2Hand);
    if (result === 1) {
        console.log("\nプレイヤー１が勝ちました！\n");
        player1WinCount++;
    }
    else if (result === 2) {
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
else {
    console.log("".concat(player1WinCount, "\u5BFE").concat(player2WinCount, "\u3067\u5F15\u304D\u5206\u3051\u3067\u3059\uFF01\n"));
}
/**
 * ランダムな手を取得する関数
 * @returns {number} ランダムな手の値
 */
function getRandomHand() {
    return Math.floor(Math.random() * 3);
}
/**
 * 手の値から手の名前を取得する関数
 * @param {number} hand - 手の値
 * @returns {string} 手の名前
 */
function getHandName(hand) {
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
function getWinner(player1Hand, player2Hand) {
    if ((player1Hand === STONE && player2Hand === SCISSORS) ||
        (player1Hand === SCISSORS && player2Hand === PAPER) ||
        (player1Hand === PAPER && player2Hand === STONE)) {
        return 1; // プレイヤー１の勝利
    }
    else if ((player1Hand === STONE && player2Hand === PAPER) ||
        (player1Hand === SCISSORS && player2Hand === STONE) ||
        (player1Hand === PAPER && player2Hand === SCISSORS)) {
        return 2; // プレイヤー２の勝利
    }
    else {
        return 0; // 引き分け
    }
}
