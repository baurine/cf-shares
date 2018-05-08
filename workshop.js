
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

function inspect_fridge(fridge) {
  console.log(fridge.icebox);
}

/////////////////////////////////////////////////////
let washmachine = {
  container: [],
  door_open: false
}

function open_washmachine(washmachine) {
  washmachine.door_open = true
}

// ...

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
