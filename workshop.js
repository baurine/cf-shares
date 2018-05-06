
let fridge = []
let fridge_open = false

function open_fridge() {
  fridge_open = true
}

function add_to_fridge(obj) {
  if (fridge_open) {
    fridge.push(obj)
    console.log('success');
  } else {
    console.log('failed, the fridge is closed');
  }
}

function close_fridge() {
  fridge_open = false
}

function inspect_fridge() {
  console.log(fridge);
}

function main() {
  console.log('start');

  open_fridge();
  add_to_fridge('🐈');
  add_to_fridge('🐈');
  close_fridge();

  add_to_fridge('🐈');

  inspect_fridge();
}

main()
