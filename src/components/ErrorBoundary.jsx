import React, { Component } from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, we would log this to an external service (e.g. Sentry)
    // For now, we avoid logging in console to meet production guidelines
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Get current language from local storage to show correct language fallback
      const savedLang = localStorage.getItem('language') || 'en';
      const isAr = savedLang === 'ar';

      return (
        <div className="error-boundary-fallback">
          <div className="fallback-card glass">
            <AlertTriangle size={48} className="error-icon" />
            <h1>{isAr ? 'عذراً، حدث خطأ ما!' : 'Oops, something went wrong!'}</h1>
            <p>
              {isAr 
                ? 'لقد واجه التطبيق خطأ غير متوقع. يرجى محاولة إعادة تحميل الصفحة.' 
                : 'The application encountered an unexpected error. Please try reloading the page.'}
            </p>
            <button onClick={this.handleReset} className="btn-primary">
              {isAr ? 'إعادة تحميل الصفحة' : 'Reload Page'}
            </button>
          </div>

          <style>{`
            .error-boundary-fallback {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #030712;
              padding: 24px;
              font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
              color: #f8fafc;
            }
            .fallback-card {
              max-width: 500px;
              width: 100%;
              padding: 3rem;
              border-radius: 16px;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1.5rem;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(255, 255, 255, 0.05);
              background: rgba(15, 23, 42, 0.6);
              backdrop-filter: blur(12px);
            }
            .error-icon {
              color: #ef4444;
            }
            .fallback-card h1 {
              font-size: 1.8rem;
              margin: 0;
              font-weight: 700;
            }
            .fallback-card p {
              color: #94a3b8;
              line-height: 1.6;
              margin: 0;
              font-size: 1.05rem;
            }
            .fallback-card button {
              margin-top: 0.5rem;
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
