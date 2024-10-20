import "react-i18next"; // Импортируем типы из библиотеки

declare module "react-i18next" {
  // Расширяем существующий интерфейс I18nextProviderProps
  interface I18nextProviderProps {
    children: React.ReactNode; // Добавляем свойство children
  }
}
