import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import vi from './locales/vi'

// Cấu hình i18next
i18n
  .use(initReactI18next) // Kết nối i18next với React
  .init({
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // Không cần phải escape giá trị (React đã làm điều này)
    },
  })

export default i18n
