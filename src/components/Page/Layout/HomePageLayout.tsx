import { JSX } from "react"

import { Page } from ".."
import { ColumnUI } from '../Content/Content.css'
import { ImageUI } from '../../../styles/common.css'
import { PageType } from "../../../types/layout"
import { PageDisplayInfo } from "../../../common/constants"

export type HomePageProps = {
  header?: string | JSX.Element
  children: string | JSX.Element | JSX.Element[]
  pageType: PageType
}

export const HomePageLayout = ({
  header: headerProp,
  pageType,
  children,
}: HomePageProps) => {

  const {
    header: headerInfo,
    imageUrl,
    imageDescription
  } = PageDisplayInfo[pageType]

  const role = imageDescription ? 'figure' : 'presentation'
  const header = headerProp || headerInfo

  return (
    <Page>
      <Page.Content className="two-column home">
        <ColumnUI className="home">
          <Page.Header id="main-header">{header}</Page.Header>
          {children}
        </ColumnUI>
        <ColumnUI role={role}>
          <ImageUI
            src={imageUrl}
            alt={imageDescription}
          />
        </ColumnUI>
      </Page.Content>
    </Page>
  )
}