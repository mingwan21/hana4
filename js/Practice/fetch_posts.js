const myFetch = async (path) => {
  const res = await fetch(`${BASE_URL}/${path}`);
  return res.json();
};

const getUserPosts = async userId => {
    const {id, name} = await myFetch(`users/${userId}`);
    const result = {id,name}

}