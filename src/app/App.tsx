import { useTheme } from "app/providers/ThemeProvider";
import { memo, Suspense, useEffect } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";
import { FlexContainer } from "shared/ui/FlexContainer";
import { Content } from "widgets/Content";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/RouterProvider";
import { Loader } from "shared/ui/Loader";
import { Modals } from "shared/ui/Modals";
import { addThemeOnBody } from "shared/helpers/functions/addThemeClassOnBody";
import { useAppDispatch } from "./providers/StoreProvider/config/store";
import { userActions } from "entities/User";

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.updateUser());
  }, [dispatch]);

  useEffect(() => {
    addThemeOnBody(theme);
  }, [theme]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Header />
        <FlexContainer styleProps={{ flexDirection: "row" }}>
          <Sidebar />
          <Content>
            <Modals />
            <AppRouter />
          </Content>
        </FlexContainer>
      </Suspense>
    </div>
  );
});

export default App;
