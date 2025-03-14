//The reason for moving text to this file is for internationalisation

import { PageDisplayInfoListModal } from "../types/layout"

export const LAYOUT = {
  HOME: 0,
  SINGLE_COLUMN: 1,
  TWO_COLUMN: 2,
} as const

export const PAGE_TYPE = {
  HOME: 'Home',
  PROJECT: 'Project'
} as const

export const PageDisplayInfo: PageDisplayInfoListModal = {
  Home: {
    layoutType: LAYOUT.HOME,
    header: 'Hello, I am Arathi',
    imageUrl: '/arathi_profile.jpg',
    imageDescription: 'A sketch of Arathi'
  },
  Project: {
    layoutType: LAYOUT.TWO_COLUMN,
    header: 'My Projects'
  }
}


