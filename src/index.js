run(3, 'A', 'B', 'C');

function run(num, src, dest, sta) {
  if (num === 1) {
    console.log(src + ' => ' + dest);
  } else {
    run(num - 1, src, sta, dest);
    run(1, src, dest, sta);
    run(num - 1, sta, dest, src);
  }
}
