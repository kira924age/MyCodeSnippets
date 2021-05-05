# 素数判定 (試し割り法)

## 概要

試し割り法による素数判定の Python3 による実装.

時間計算量は $O(\sqrt{n})$

## Snippet

```python
def is_prime(n):
    x = 2
    while x * x <= n:
        if n % x == 0:
            return False
        x += 1

    return n != 1
```

## 解説

素数とは「1より大きい自然数であり, 1とその数自身でしか割り切れないもの」です.

ある自然数 $n$ が素数であるかどうかを判定する最も単純な方法の1つに
1から $n$ までの数それぞれについて $n$ を割り切れるかどうかを試し,
1 と $n$ 以外で割れないかどうかを調べるというものがあります.

コードで示すと以下のようになります.

```python
def is_prime(n):
    # x: 1 から n まで
    for x in range(1, n + 1):
        # nがxで割り切れる かつ xが1でもnでもない => 素数ではない
        if n % x == 0 and (x != 1 and x != n):
            return False

    return n != 1
```

このアルゴリズムの時間計算量は $O(n)$ となります.

実は以下に示す命題が真であるため $n$ が1と$n$ 以外で割り切れるかどうかを調べる場合
2から $\sqrt{n}$ まで調べれば十分です.

(命題) 自然数 $n$ が1と$n$ 以外で割り切れるならば, $n$ は $\sqrt{n}$ 以下の約数を必ず持つ.

(証明) 自然数 $n$ が1と$n$ 以外の整数 $p$ で割り切れるとすると, 次式が成り立つ.

$$
  n = p \times q
$$

$p$ は 1 と $n$ 以外であるため, $q$ も 1 と $n$ 以外の $n$ の約数となる.
したがって, $p$ と $q$ のいずれかは $\sqrt{n}$ 以下となるので
$n$ は $\sqrt{n}$ 以下の約数を必ず持つ.

この性質を利用することで $O(\sqrt{n})$ で素数判定を行うことが出来ます.

## 使用例

* [AIZU ONLINE JUDGE ALDS1_1_C: 素数](https://onlinejudge.u-aizu.ac.jp/courses/lesson/1/ALDS1/1/ALDS1_1_C)
  * [My submission](https://onlinejudge.u-aizu.ac.jp/solutions/problem/ALDS1_1_C/review/5449261/kira924age/Python3)
* [AtCoder Beginner Contest 149: C - Next Prime](https://atcoder.jp/contests/abc149/tasks/abc149_c)
  * [My submission](https://atcoder.jp/contests/abc149/submissions/22302886)

## 参考文献

* プログラミングコンテストチャレンジブック

