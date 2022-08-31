import BlackSideLayout from '../components/layouts/BlackSideLayout'
import GrayCollapseMenuLayout from '../components/layouts/GrayCollapseMenuLayout'

export default function PageCollapseMenu({ posts }) {
  return (
    <GrayCollapseMenuLayout>
      <main>
        <h1 className="text-3xl font-bold ">Page-GrayCollapseMenuLayout</h1>
      </main>
    </GrayCollapseMenuLayout>
  )
}
