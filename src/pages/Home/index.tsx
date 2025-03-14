import { Layout } from "../../components/Page/Layout"
import { PAGE_TYPE } from "../../common/constants"

export const Home = () => {
  return (
    <Layout
      pageType={PAGE_TYPE.HOME}
    >
      <p>
        I am someone who enjoys creative thinking and converting ideas into reality using programming as a tool. I am hoping that I would always be in a situation where I can enjoy what I do and improve myself.
      </p>
    </Layout>
  )
}
