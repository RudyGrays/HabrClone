import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { Loader } from "shared/ui/Loader";
import { PageError } from "widgets/PageError";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("error");
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <PageError />
        </Suspense>
      );
    }

    return <>{children}</>;
  }
}

export default ErrorBoundary;
