const calculate = (resource, source, errorRate) => {
  const percent = (value) => {
    return (errorRate / 100) * value
  }

  const difference = (x, y) => {
    return Math.abs(x - y)
  }

  var details = {}
  var result = true

  for (const key in resource) {
    let evaluation = (resource[key] >= (source[key] - percent(source[key])))
      && (resource[key] <= (source[key] + percent(source[key])))

    if (!evaluation) {
      result = evaluation
    }

    details[key] = {
      evaluation: evaluation,
      differences: [
        difference(resource[key], source[key] - percent(source[key])),
        difference(resource[key], source[key]),
        difference(resource[key], source[key] + percent(source[key]))
      ]
    }
    
  }

  return {
    resource: resource,
    source: source,
    errorRate: errorRate,
    details: details,
    result: result
  }
}

export { calculate }
