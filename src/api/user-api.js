import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVICE_URL

export const useCreateUserHandler = () => {
  return async (username, email) => {
    return await axios.post(`${BASE_URL}/users`, {username, email})
  }
}

export const useFetchUserHandler = () => {
  return async (filter) => {
    const queryParam = new URLSearchParams(filter).toString()
    return await axios.get(`${BASE_URL}/users?${queryParam}`)
  }
}

export const useFetchUsernameSuggestion = () => {
  return async (username) => {
    const queryParam = username ? new URLSearchParams({ username }).toString() : ""
    const { data } = await axios.get(`${BASE_URL}/users/username-suggestion?${queryParam}`)
    return data
  }
}
