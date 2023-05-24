import React from 'react';
import useErrorBoundary from '../../../utils/custom-hooks/useErrorBoundary';

const withErrorBoundary = (WrappedComponent) => {
  return (props) => {
    const { hasError, error, errorInfo, componentDidCatch, resetErrorBoundary } = useErrorBoundary();

    if (hasError) {
      return (
        <div className="error-container">
            <h1 className="error-heading">Something went wrong.</h1>
                <p className="error-message">{error && error.toString()}</p>
                <div className="error-stack">{errorInfo && errorInfo.componentStack}</div>
                <button className="error-button" onClick={resetErrorBoundary}>
                    Try Again
                </button>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withErrorBoundary;
