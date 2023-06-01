import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css' //styles simple bar overflow x scroll. also check global css

import DocumentationTabs from '@/components/DocumentationTabs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PraiseDev | Documentation',
  description: 'Free & open-source text similarity API',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
