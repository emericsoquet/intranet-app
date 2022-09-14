export const setToken = (data) => {
    localStorage.setItem('token', data)
}
export const getToken = () => {
    return window.localStorage.getItem('token');
}

export const setUser = (user) => {
    try {
      const serializedState = JSON.stringify(user);
      // setItem pour mettre à jour le cache de state (ou en créer un nouveau)
      localStorage.setItem('user', serializedState);
    } catch (error) {
        console.log('ERROR:', error);
    }
}

export const getUser = () => {
    // si l'utilisateur bloque le cache, la fonction peut planter donc on insère un try + catch
    try {
      const serializedState = localStorage.getItem('user');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.log('ERROR:', error);
    }
}