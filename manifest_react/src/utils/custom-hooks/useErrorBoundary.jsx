import React, { useState } from 'react';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  const componentDidCatch = (error, errorInfo) => {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  };

  const resetErrorBoundary = () => {
    setHasError(false);
    setError(null);
    setErrorInfo(null);
  };

  return { hasError, error, errorInfo, componentDidCatch, resetErrorBoundary };
};

export default useErrorBoundary;
