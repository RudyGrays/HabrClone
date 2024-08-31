import App from "app/App";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { SidebarProvider } from "app/providers/SidebarProvider/ui/SidebarProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import { ModalProvider } from "app/providers/ModalProvider";
import { StoreProvider } from "app/providers/StoreProvider";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StoreProvider>
    <ModalProvider>
      <ThemeProvider>
        <BrowserRouter>
          <SidebarProvider>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </SidebarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ModalProvider>
  </StoreProvider>,
);
