export async function getActions(url) {
    const reponse = await fetch(url);
    const actions = await reponse.json();
    console.log(actions)
    return actions
  }