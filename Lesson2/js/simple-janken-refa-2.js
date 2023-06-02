var Hands = {
    STONE: 0,
    SCISSORS: 1,
    PAPER: 2, // パー
};
/**
 * ランダムな手を取得する関数
 * @returns {number} ランダムな手の値
 */
function getRandomHand() {
    return Math.floor(Math.random() * Object.keys(Hands).length);
}
/**
 * 手の値から手の名前を取得する関数
 * @param {number} hand - 手の値
 * @returns {string} 手の名前
 */
function getHandName(hand) {
    return Object.keys(Hands).find(function (key) { return Hands[key] === hand; });
}
/**
 * 勝者を判定する関数
 * @param {number} player1Hand - プレイヤー１の手の値
 * @param {number} player2Hand - プレイヤー２の手の値
 * @returns {number} 勝者の番号 (1: プレイヤー１, 2: プレイヤー２, 0: 引き分け)
 */
function getWinner(player1Hand, player2Hand) {
    if ((player1Hand === Hands.STONE && player2Hand === Hands.SCISSORS) ||
        (player1Hand === Hands.SCISSORS && player2Hand === Hands.PAPER) ||
        (player1Hand === Hands.PAPER && player2Hand === Hands.STONE)) {
        return 1; // プレイヤー１の勝利
    }
    else if ((player1Hand === Hands.STONE && player2Hand === Hands.PAPER) ||
        (player1Hand === Hands.SCISSORS && player2Hand === Hands.STONE) ||
        (player1Hand === Hands.PAPER && player2Hand === Hands.SCISSORS)) {
        return 2; // プレイヤー２の勝利
    }
    else {
        return 0; // 引き分け
    }
}
/**
 * ジャンケンを実行する関数
 */
function playJanken() {
    var player1WinCount = 0;
    var player2WinCount = 0;
    console.log("【ジャンケン開始】\n");
    for (var cnt = 0; cnt < 3; cnt++) {
        console.log("\u3010".concat(cnt + 1, "\u56DE\u6226\u76EE\u3011"));
        var player1Hand = getRandomHand();
        var player2Hand = getRandomHand();
        console.log("".concat(getHandName(player1Hand), " vs. ").concat(getHandName(player2Hand)));
        var winner = getWinner(player1Hand, player2Hand);
        if (winner === 1) {
            console.log("\nプレイヤー１が勝ちました！\n");
            player1WinCount++;
        }
        else if (winner === 2) {
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
}
playJanken();
