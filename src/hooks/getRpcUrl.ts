// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1]

const getNodeUrl = () => {
  return nodes[0]
}

export default getNodeUrl
