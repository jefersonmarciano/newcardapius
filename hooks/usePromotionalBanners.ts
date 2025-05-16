"use client"

import { atom, useAtom } from "jotai"

interface Banner {
  id: string
  title: string
  imageUrl: string
}

const bannersAtom = atom<Banner[]>([
  {
    id: "1",
    title: "50% desconto no upgrade do seu plano",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner1-93rZCq4FRR8UJcKi48ECCHEHDoFHzO.png",
  },
  {
    id: "2",
    title: "Automatize seu Whatsapp",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banners-app-whasapp-automacao%201-QIqHA3T9S0ra8ihqar0fitJGzpbBAx.png",
  },
])

export function usePromotionalBanners() {
  const [banners, setBanners] = useAtom(bannersAtom)

  return {
    banners,
    setBanners,
  }
}
