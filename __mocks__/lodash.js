const lodash = {
  get: jest.fn().mockImplementation((obj, path, defaultValue) => {
    const paths = path.split('.')
    let newObj = obj
    paths.forEach(pathItem => {
      if(newObj && newObj[pathItem]) {
        newObj = newObj[pathItem]
      }
    })
    if(paths.length) {
      return newObj
    }
    return defaultValue
  }),
}

module.exports = lodash