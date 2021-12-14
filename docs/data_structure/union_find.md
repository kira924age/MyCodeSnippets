# 素集合データ構造 (UnionFind)

## 概要

素集合データ構造は互いに素な集合に対して以下の2つの操作を効率的に行えるデータ構造.

* Union: 2つの集合を1つに統合する.
* Find: 特定の要素がどの集合に属しているか求める.

素集合データ構造は Union-Find とも呼ばれる.

## 計算量

## Snippet

### C++

```cpp
struct UnionFind {
  std::vector<int> parent;
  int __size;
  UnionFind(int n) : parent(n, -1), __size(n) {}
  void unite(int x, int y) {
    if ((x = root(x)) != (y = root(y))) {
      if (parent[y] < parent[x]) {
        std::swap(x, y);
      }
      parent[x] += parent[y];
      parent[y] = x;
      __size--;
    }
  }
  bool same(int x, int y) { return root(x) == root(y); }
  int root(int x) { return parent[x] < 0 ? x : parent[x] = root(parent[x]); }
  int size(int x) { return -parent[root(x)]; }
  int size() { return __size; }
};
```

### Python

```python
class UnionFind:
    def __init__(self, n):
        self.parent = [ -1 for _ in range(n) ]
        self._size = n

    def unite(self, x, y):
        x, y = self.root(x), self.root(y)
        if x != y:
            if self.parent[y] < self.parent[x]:
                x, y = y, x
            self.parent[x] += self.parent[y]
            self.parent[y] = x
            self._size -= 1

    def same(self, x, y):
        return self.root(x) == self.root(y)

    def root(self, x):
        if self.parent[x] < 0:
            return x
        else:
            self.parent[x] = self.root(self.parent[x])
            return self.root(self.parent[x])

    def size(self, x):
        return -self.parent[self.root(x)]
```

## 解説

初期状態は頂点数 $n$ 辺がない状態のグラフとみなすことができる.
このグラフに対して以下のような操作ができる.

* `unite(x, y)` : 頂点 x と y が属する2つの集合を1つにマージする
* `same(x, y)` : 頂点 x と y が同じ集合に属するかを判定する
* `root(x)` : 頂点 x が属する集合の根 (代表元) を返す.
* `size(x)` : 頂点 x が属する集合のサイズを返す

C++ の実装では引数を与えず `size()` を呼ぶことで Python の実装では `_size` を参照することでグラフの連結成分の個数(集合の個数)を取得できる.

## 検証

## 参考文献

