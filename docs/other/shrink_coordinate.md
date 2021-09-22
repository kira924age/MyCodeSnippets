# 座標圧縮

## 概要

数列 $A$ を引数として受け取り, 数列 $A$ を座標圧縮した結果を返す.

ここで座標圧縮とは以下のように, 数列の各要素を全体において 0-indexed で何番目に小さいかを表す数値に置換することをいう.

* 圧縮前: $A = (4, 100, 8, -24, 77, 8)$
* 圧縮後: $B = (1, 4, 2, 0, 3, 2)$

## 計算量

与えられた数列の長さを $n$ として

* $O(n \log{n})$

## Snippet

### C++

```cpp
template <class T> std::vector<int> shrink_coordinate(std::vector<T> &a) {
  std::vector<T> b = a;

  std::sort(b.begin(), b.end());
  b.erase(std::unique(b.begin(), b.end()), b.end());

  int N = a.size();

  std::vector<int> res(N);
  for (int i = 0; i < N; i++) {
    res[i] = std::lower_bound(b.begin(), b.end(), a[i]) - b.begin();
  }

  return res;
}
```

### Python

```python
def shrink_coordinate(a):
    b = sorted(list(set(a)))
    table = {v: k for k, v in enumerate(b)}

    return list(map(lambda x: table[x], a))
```

## 解説

座標圧縮をするにはまず元の数列 $A$ をコピーしてソートおよび重複の削除を行った数列 $B$ を求める.

* $A = (4, 100, 8, -24, 77, 8)$
* $B = (-24, 4, 8, 77, 100)$

数列 $B$ を小さい方から順に見ていき, 0, 1, 2, ... と数字を割り振っていけば,
元の数列の要素と座標圧縮後の数列の要素のペアを得ることができる.
Python であれば辞書を, C++ であれば `std::map` などを使って,
元の数列の要素と座標圧縮後の数列の要素の組としたデータを持つことができる.

C++ の `std::map` は定数倍が遅いので, 数列 $A$ のある要素が座標圧縮後にどのような値になるかは数列 $B$ に対して二分探索をして何番目かを見るようにしたほうが速いことが多い.

そのため, C++ では二分探索を行い, Python では辞書を使ってテーブルを持つように実装している.

## 検証

* <a href="../solution/ABC036-C" target="_blank" rel="noopener noreferrer">ABC036-C: 座圧<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a>
* <a href="../solution/ABC113-C" target="_blank" rel="noopener noreferrer">ABC113-C: ID<span><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> <span class="sr-only">(opens new window)</span></span></a>

## 参考文献

* [https://drken1215.hatenablog.com/entry/2021/08/09/235400](https://drken1215.hatenablog.com/entry/2021/08/09/235400)

