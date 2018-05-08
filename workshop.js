
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

function run_fridge(fridge) {
  fridge.temperature = 10
}

function inspect_fridge(fridge) {
  console.log(fridge.icebox, 'temperature: ' + fridge.temperature);
}

/////////////////////////////////////////////////////
function open_washmachine(washmachine) {
  washmachine.door_open = true
}

function add_to_washmachine(washmachine, obj) {
  if (washmachine.door_open) {
    washmachine.container.push(obj)
    console.log('success');
  } else {
    console.log('failed, the fridge is closed');
  }
}

function close_washmachine(washmachine) {
  washmachine.door_open = false
}

function run_washmachine(washmachine) {
  washmachine.water = 50
}

function inspect_washmachine(washmachine) {
  console.log(washmachine.container, 'water: ' + washmachine.water);
}

// ...

function main() {
  console.log('start');

  let fridge_1 = {
    icebox: [],
    door_open: false,
    temperature: 20,
  }

  open_fridge(fridge_1);
  add_to_fridge(fridge_1, '🐈');
  add_to_fridge(fridge_1, '🐈');
  close_fridge(fridge_1);

  add_to_fridge(fridge_1, '🐈');

  inspect_fridge(fridge_1);

  ///////////////////
  let fridge_2 = {
    icebox: [],
    door_open: false,
    temperature: 20,
  }

  open_fridge(fridge_2);
  add_to_fridge(fridge_2, '🐶');
  add_to_fridge(fridge_2, '🐶');
  add_to_fridge(fridge_2, '🐶');
  close_fridge(fridge_2);

  add_to_fridge(fridge_2, '🐶');

  run_fridge(fridge_2)
  inspect_fridge(fridge_2)

  ///////////////////
  let washmachine = {
    container: [],
    door_open: false,
    water: 0
  }

  open_washmachine(washmachine)
  add_to_washmachine(washmachine, '🐷')
  close_washmachine(washmachine)
  run_washmachine(washmachine)
  inspect_washmachine(washmachine)
}

main()
