"use client"

import { atom, useAtom } from "jotai"

interface User {
  id: string
  name: string
  avatar: string
  role: string
}

const userAtom = atom<User>({
  id: "1",
  name: "Luciano França",
  avatar: "/images/perfil.png",
  role: "Administrador geral",
})

export function useUserStore() {
  const [user, setUser] = useAtom(userAtom)

  return {
    user,
    setUser,
  }
}
