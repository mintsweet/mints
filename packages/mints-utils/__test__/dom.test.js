import { $ } from '../src';

test('function query is right', () => {
  document.body.innerHTML = `
    <div id="id">ID</div>
    <div class="class">Class</div>
    <p>Name</p>
  `;

  expect($('#test').el).toEqual([]);
  expect($('#id').el[0].innerHTML).toEqual('ID');
  expect($('.class').el[0].innerHTML).toEqual('Class');
  expect($('p').el[0].innerHTML).toEqual('Name');
  expect($('.test', 'test').el).toEqual([]);
});

test('function html is right', () => {
  document.body.innerHTML = `
    <div id="test"></div>
  `;

  $('#test').html('Test');

  expect(document.getElementById('test').innerHTML).toEqual('Test');
});

test('function append is right', () => {
  document.body.innerHTML = `
    <div id="test"></div>
  `;

  $('#test').append('<div id="append">Append</div>');

  expect(document.getElementById('append').innerHTML).toEqual('Append');
});

test('function remove is right', () => {
  document.body.innerHTML = `
    <div id="test"></div>
  `;

  $('#test').remove();

  expect(document.getElementById('test')).toEqual(null);
});

test('function show is right', () => {
  document.body.innerHTML = `
    <div id="test" style="display: none;"></div>
  `;

  expect(document.getElementById('test').style.display).toEqual('none');

  $('#test').show();

  expect(document.getElementById('test').style.display).toEqual('block');
});

test('function hide is right', () => {
  document.body.innerHTML = `
    <div id="test"></div>
  `;

  $('#test').hide();

  expect(document.getElementById('test').style.display).toEqual('none');
});

test('function on is right', () => {
  document.body.innerHTML = `
    <button id="button"></button>
    <div id="test">
      <button id="test-button"></button>
    </div>
  `;

  $('#button').on('click', function() {
    this.html('button');
  });

  $('#test').on('click', '#test-button', function() {
    this.html('test-button');
  });

  const button = document.getElementById('button');
  const testButton = document.getElementById('test-button');

  button.click();
  testButton.click();

  expect(button.innerHTML).toEqual('button');
  expect(testButton.innerHTML).toEqual('test-button');
});
