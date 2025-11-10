'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section className="py-16 px-4 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#3b2415' }}>
              문제가 발생했습니다
            </h2>
            <p className="mb-6" style={{ color: '#3b2415' }}>
              페이지를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg font-medium"
              style={{ backgroundColor: '#3b2415', color: '#ffffff' }}
            >
              페이지 새로고침
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

