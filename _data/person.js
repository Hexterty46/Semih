const personId = 252
const personResponse = await fetch(`https://fdnd.directus.app/items/person/${personId}`)

const personResponseJSON = await personResponse.json()

export default personResponseJSON.data