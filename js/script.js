console.log('hello, forms')

document.addEventListener('DOMContentLoaded', () => {
  // we can listen for a special event, 'submit'
  document.querySelector('#login-form').addEventListener('submit', e => {
    // don't refresh the page -- which is the default behavior
    // submit events will refresh the page (html5 works this way)
    e.preventDefault() // dont refresh the page
    const textInput = document.querySelector('#text-input')
    const numInput = document.querySelector('#num-input')
    const check = document.querySelector('#check')
    console.log(check.checked)
    console.log(`num input: ${numInput.value}, text input: ${textInput.value}`)
  })
})