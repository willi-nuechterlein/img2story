import { atom } from 'jotai'

export interface User {
  id: number
}
const testUser: User = {
  id: 123
}
export const userAtom = atom<User | null>(testUser)

export const getSetUserAtom = atom(
  (get) => get(userAtom),
  (_get, set, user: User) => {
    set(userAtom, user)
  }
)
