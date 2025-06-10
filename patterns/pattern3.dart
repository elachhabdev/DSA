void main(List<String> args) {
  int n = 5;
  for (int i = n; i >= 1; i--) {
    String s = "";
    for (int j = 1; j <= i; j++) {
      s += '*';
    }
    print(s);
  }
}
