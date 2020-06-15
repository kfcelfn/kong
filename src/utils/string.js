function str (Names) {
  return Names.toLowerCase().replace(/^\_/, '').replace(/\_([a-zA-Z0-9])([a-zA-Z0-9]+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase()
  })
}

export {
  str
}