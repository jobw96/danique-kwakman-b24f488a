import { Component, type ErrorInfo, type ReactNode } from 'react';
import ServerError from '@/pages/ServerError';
import { trackRuntimeError } from '@/lib/errorTracking';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Vangt onverwachte render-errors op en toont de 500-pagina.
 * Logt naar de error-tracker zodat regressies zichtbaar worden in GA4/GTM.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    trackRuntimeError(error, { componentStack: info.componentStack });
  }

  handleReset = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return <ServerError onRetry={this.handleReset} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
