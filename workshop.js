
let fridge_1 = {
  icebox: [],
  door_open: false
}
let fridge_2 = {
  icebox: [],
  door_open: false
}

function open_fridge(fridge) {
  fridge.door_open = true
}

function add_to_fridge(fridge, obj) {
  if (fridge.door_open) {
    fridge.icebox.push(obj)
    console.log('success');
  } else {
    console.log('failed, the fridge is closed');
  }
}

function close_fridge(fridge) {
  fridge.door_open = false
}

// 需要知道 fridge 的细节，而面向对象，无须，从而体现它的封装性
// 你需要知道，冰箱有个门，可以开关，里面有个 icebox，可以用来装东西
function inspect_fridge(fridge) {
  console.log(fridge.icebox);
}

function main() {
  console.log('start');

  open_fridge(fridge_1);
  add_to_fridge(fridge_1, '🐈');
  add_to_fridge(fridge_1, '🐈');
  close_fridge(fridge_1);

  add_to_fridge(fridge_1, '🐈');

  inspect_fridge(fridge_1);

  open_fridge(fridge_2);
  add_to_fridge(fridge_2, '🐶');
  add_to_fridge(fridge_2, '🐶');
  add_to_fridge(fridge_2, '🐶');
  close_fridge(fridge_2);

  add_to_fridge(fridge_2, '🐶');

  inspect_fridge(fridge_2);
}

main()
