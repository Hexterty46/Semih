const personResponse = await fetch('https://fdnd.directus.app/items/person/252')

const personResponseJSON = await personResponse.json()

export default personResponseJSON.data