import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import * as locales from '../content/locale';
import '../styles/global.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;