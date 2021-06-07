export { };
// main
async function main() {
    // util for input
    const readline = require('readline').createInterface({ input: process.stdin });
    const readlineiter = readline[Symbol.asyncIterator]();
    const readworditer = (async function* () { for await (const line of readlineiter) for (const word of line.split(" ")) yield await word; })();
    const inputline = async () => (await readlineiter.next()).value;
    const inputword = async () => (await readworditer.next()).value;
    // util for es6
    const fromto = function* (from: number, to: number, step = 1) { for (let x = from; x <= to; x += step) yield x; };
    const startlen = function* (start: number, len: number, step = 1) { for (let x = start; x < start + len; x += step) yield x; }

    // TODO edit the code

    // 入力処理

    // ＜例＞文字列
    //       S
    // // param
    // let s: string;
    // // init
    // s = await inputword();

    // ＜例＞数値
    //       N
    // // param
    // let n: number;
    // // init
    // n = Number(await inputword());

    // ＜例＞bitint
    //       N
    // // param
    // let n: bigint;
    // // init
    // n = BigInt(await inputword());

    // ＜例＞数値ペア
    //       N K
    // param
    // let n: number, k: number;
    // init
    // n = Number(await inputword());
    // k = Number(await inputword());

    // ＜例＞数値タプル
    //       N K L
    // param
    // let n: number, k: number, l: number;
    // init
    // n = Number(await inputword());
    // k = Number(await inputword());
    // l = Number(await inputword());

    // ＜例＞一次元数値配列（横）
    //       N
    //       A1 A2 ... An
    // // param
    // let n: number;
    // let an: number[] = [];
    // // init
    // n = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     an.push(Number(await inputword()))
    // }

    // ＜例＞一次元数値配列（縦）
    //       N
    //       A1
    //       A2
    //       :
    //       An
    // // param
    // let n: number;
    // let an: number[] = [];
    // // init
    // n = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     an.push(Number(await inputword()))
    // }

    // ＜例＞一次元文字列配列（縦）
    //       N
    //       S1
    //       S2
    //       :
    //       Sn
    // // param
    // let n: number;
    // let an: number[] = [];
    // // init
    // n = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     an.push(await inputword())
    // }

    // ＜例＞一次元数値配列ペア（縦）
    //       N
    //       X1 Y1
    //       X2 Y2
    //       :  :
    // // param
    // let n: number;
    // let xn: number[] = [], yn: number[] = [];
    // // init
    // n = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     xn.push(await inputword());
    //     yn.push(await inputword());
    // }

    // ＜例＞一次元オブジェクト配列（縦）
    //       N
    //       S1 T1
    //       S2 T2
    //       :  :
    //       Sn Tn
    // // param
    // let n: number;
    // let stn: { s: string, t: number }[] = [];
    // // init
    // n = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     stn.push({ s: await inputword(), t: Number(await inputword()) });
    // }

    // ＜例＞二次元数値配列
    //       N M
    //       A11 A12 ... A1m
    //       A21 A22 ... A2m 
    //       :   :       :
    //       An1 An2 ... Anm 
    // // param
    // let n: number, m: number;
    // let anm: number[][] = [];
    // // init
    // n = Number(await inputword());
    // m = Number(await inputword());
    // for (let nx = 0; nx < n; nx++) {
    //     anm.push([]);
    //     for (let mx = 0; mx < m; mx++) {
    //         anm.slice(-1)[0].push(Number(await inputword()));
    //     }
    // }

    // ＜例＞文字グリッド
    //       H W
    //       S11 S12 ... S1w
    //       S21 S22 ... S2w 
    //       :   :       :
    //       Sh1 Sh2 ... Shw 
    // // param
    // let h: number, w: number;
    // let shw: string[][] = [];
    // // init
    // h = Number((await inputword()));
    // w = Number((await inputword()));
    // for (let hx = 0; hx < h; hx++) {
    //     shw.push((await inputword()).split(""));
    // }

    // solve
    let ans;

    // 出力処理

    // ＜例＞bigintの末尾の"n"を削除して出力
    // ans = ans.toString().replace("n", "");

    // ＜例＞文字列配列を改行で結合して出力
    // ans = ans.join("\n");

    // ＜例＞二次元数値配列を結合して出力
    // ans = anm.map(an => an.join(" ")).join("\n");

    // answer
    console.log(ans);
    return;
}
main();
