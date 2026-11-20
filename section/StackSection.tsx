import { useTranslation } from 'next-i18next'

import Pills from '@/components/Pills'
import Section from '@/components/Section'

const StackSection = () => {
  const { t } = useTranslation('common')
  // returnObjects no tipa el resultado; la forma la define common.json
  const tools = t('stack.items', { returnObjects: true }) as string[]

  return (
    <Section title={t('stack.title')}>
      <Pills items={tools} />
    </Section>
  )
}

export default StackSection
