import { Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { CookiesEnum } from '@/enums'
import { cookiesPlugin } from '@/plugins'

export const SwitchLanguage = () => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')
  const next = router.locale === 'es' ? 'en' : 'es'

  const handleChangeLanguage = async () => {
    await i18n.changeLanguage(next)
    cookiesPlugin.setName(CookiesEnum.NEXT_LOCALE, next)
    router.push(router.asPath, router.asPath, { locale: next })
  }

  return (
    <Button
      onClick={handleChangeLanguage}
      aria-label={t('nav.switchLanguage')}
      variant="outline"
      ml="6px"
      h="36px"
      px="10px"
      borderRadius="8px"
      borderColor="line"
      color="mist"
      textStyle="label"
      _hover={{ color: 'ink', borderColor: 'lineStrong' }}
    >
      ES / EN
    </Button>
  )
}
