// const input = document.getElementById('username');

// HTML Element error
// (Because it cannot be determined which tag is handled)
// input.placeholder = 'Username';

// Confirm the mold
const input = document.getElementById('username') as HTMLInputElement;
// Generics is also possible
// const input =<HTMLInputElement> document.getElementById('username') as HTMLInputElement;
input.placeholder = 'Username';

// event
const target = document.getElementById('username');
target.addEventListener('input', (e) => {
  console.log(e);
  // HTML Element error
  // console.log(e.target.value);
  // instanceof the mold
  if (e.target instanceof HTMLInputElement) {
    console.log(e.target.value);
  }
});
