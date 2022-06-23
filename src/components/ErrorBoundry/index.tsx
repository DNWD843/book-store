import React, { Component, PropsWithChildren } from 'react';

type TErrorBoundaryProps = {
  component: React.ComponentType
};

export class ErrorBoundary extends Component<PropsWithChildren<TErrorBoundaryProps>, { hasError: boolean }> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, component: ErrorComponent } = this.props;

    if (hasError) {
      return (<ErrorComponent />);
    }
    return children;
  }
}
