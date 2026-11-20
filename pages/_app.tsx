import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { FC, useEffect, useState } from 'react'

import Layout from '@/components/Layout'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { cookiesPlugin } from '@/plugins'
import { CookiesEnum } from '@/enums'
import theme from '@/theme'

const heading = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] })

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { i18n } = useTranslation('common')
  const [_loading, setLoading] = useState(false)
  const router = useRouter()
  const changelanguage = async () => {
    try {
      const lang = cookiesPlugin.getName(CookiesEnum.NEXT_LOCALE)

      if (!lang) cookiesPlugin.setName(CookiesEnum.NEXT_LOCALE, 'en')

      await i18n?.changeLanguage(lang ?? 'en')
      router.push(router.asPath, router.asPath, { locale: lang ?? 'en' })
    } catch (error) {
      console.log({ error })
    }
  }
  useEffect(() => {
    changelanguage()
  }, [])

  useEffect(() => {
    changelanguage()

    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])
  return (
    <ChakraProvider theme={theme}>
      {/* En :root para que body y los portales de Chakra hereden las fuentes */}
      <style jsx global>{`
        :root {
          --font-heading: ${heading.style.fontFamily};
          --font-body: ${body.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
