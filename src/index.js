import React from 'react'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'

export default function createI18NextProxy () {
  const I18NextProxy = props => {
    const { nextProxy, ...rest } = props
    const { value: NextProxy, next } = nextProxy

    const i18nOptions = props.fixture.i18nOptions || {
      fallbackLng: 'en',
      react: {
        wait: true
      }
    }
    const i18nInstance = i18n.init(i18nOptions)

    return (
      <I18nextProvider i18n={i18nInstance}>
        <NextProxy {...rest} nextProxy={next()} />
      </I18nextProvider>
    )
  }
  return I18NextProxy
}
