void main(List<String> args) {
  int n = 3;

  for (int i = 1; i <= n; i++) {
    List<String> s = List.generate(n * 2 - 1, (o) => ' ');
    int mid = ((n * 2 - 1) / 2).floor();
    for (int j = 0; j < i; j++) {
      s[mid + j] = 'o';
      s[mid - j] = 'o';
    }
    print(s.join(''));
  }
}
