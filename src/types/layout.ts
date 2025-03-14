export type LayoutType = 0 | 1 | 2

export type PageDisplayInfoModal = {
  layoutType: LayoutType,
  header: string,
  imageUrl?: string,
  imageDescription?: string,
}

export type PageDisplayInfoListModal = {
  Home: PageDisplayInfoModal,
  Project: PageDisplayInfoModal,
}

export type PageType = keyof PageDisplayInfoListModal