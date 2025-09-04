"use client";

import React, { Component, ReactNode } from "react";
import { motion } from "framer-motion";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error Boundary caught an error:", error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // You could also send error to analytics service here
    // Example: sendErrorToAnalytics(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback component if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#030014] px-4 z-modal relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-8 text-center z-modal relative"
          >
            {/* Error Icon */}
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center"
            >
              <span className="text-3xl">⚠️</span>
            </motion.div>

            {/* Error Title */}
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              We encountered an unexpected error while rendering this component.
              Don&apos;t worry, this has been logged and we&apos;re working on
              fixing it.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <motion.details
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-left"
              >
                <summary className="cursor-pointer text-red-400 hover:text-red-300 transition-colors">
                  View Error Details (Dev Mode)
                </summary>
                <div className="mt-3 p-4 bg-black/30 rounded-lg text-xs text-gray-400 overflow-auto max-h-40">
                  <strong className="text-red-400">Error:</strong>
                  <pre className="whitespace-pre-wrap break-words">
                    {this.state.error.message}
                  </pre>
                  {this.state.errorInfo && (
                    <>
                      <strong className="text-red-400 mt-2 block">
                        Stack:
                      </strong>
                      <pre className="whitespace-pre-wrap break-words text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>
              </motion.details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/")}
                className="flex-1 px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Go Home
              </motion.button>
            </div>

            {/* Help Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-gray-400 mt-4"
            >
              If this problem persists, please refresh the page or contact
              support.
            </motion.p>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// HOC wrapper for functional components
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorFallback?: ReactNode,
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={errorFallback}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// React hook for error boundary
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return setError;
};

// Error reporting utility
export const reportError = (error: Error, errorInfo?: React.ErrorInfo) => {
  // In production, you would send this to your error reporting service
  // Example: Sentry, LogRocket, Bugsnag, etc.

  if (process.env.NODE_ENV === "development") {
    console.group("🚨 Error Report");
    console.error("Error:", error);
    if (errorInfo) {
      console.error("Error Info:", errorInfo);
    }
    console.error("Timestamp:", new Date().toISOString());
    console.error("User Agent:", navigator.userAgent);
    console.error("URL:", window.location.href);
    console.groupEnd();
  }

  // Example of how you might send to an error reporting service:
  // if (process.env.NODE_ENV === "production") {
  //   try {
  //     fetch("/api/error-report", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         error: error.message,
  //         stack: error.stack,
  //         componentStack: errorInfo?.componentStack,
  //         timestamp: new Date().toISOString(),
  //         url: window.location.href,
  //         userAgent: navigator.userAgent,
  //       }),
  //     });
  //   } catch (reportingError) {
  //     console.error("Failed to report error:", reportingError);
  //   }
  // }
};

export default ErrorBoundary;
