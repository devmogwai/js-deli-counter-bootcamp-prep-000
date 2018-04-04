
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  //console.log (katzDeliLine)
  katzDeliLine.push(name)
  //console.log (katzDeliLine)
  var length = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${length} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  var name = katzDeliLine[0]
  katzDeliLine.shift()
  return `Currently serving ${name}.`
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  for (let i=1; i<2; i++){
    katzDeliLine[i-1] = i + '. ' + katzDeliLine[i-1] + ' '
  }
  console.log( `The line is currently: ${katzDeliLine}`)
}
currentLine (['george', 'anne'])