'use client';
import { useRouter } from 'next/navigation';
// import { useTranslation } from 'next-i18next';

// Simple language switcher for English and Tamil
export default function LanguageSwitcher() {
  const router = useRouter();
    //   const { i18n } = useTranslation();
    const i18n = {
        language: 'en'
    }

  const changeLanguage = (lng: string) => {
    // i18n.changeLanguage(lng);
    router.push(`/${lng}${window.location.pathname}${window.location.search}`);
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'right' }}>
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        English
      </button>
      {' | '}
      <button onClick={() => changeLanguage('ta')} disabled={i18n.language === 'ta'}>
        தமிழ்
      </button>
    </div>
  );
}
