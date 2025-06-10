void main(List<String> args) {
  int n = 10;
  for (int i = 1; i <= n; i++) {
    String s = "";
    for (int j = 1; j <= i; j++) {
      s += '${j}';
    }
    print(s);
  }
}
