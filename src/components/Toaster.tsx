'use client';

import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';
import ExclamationCircleIcon from '@heroicons/react/24/outline/ExclamationCircleIcon';
import { useToaster } from 'react-hot-toast/headless';

export default function Toaster() {
  const { toasts, handlers } = useToaster();

  const { startPause, endPause } = handlers;

  return (
    <div className="toast" onMouseEnter={startPause} onMouseLeave={endPause}>
      {toasts
        .filter((toast) => toast.visible)
        .map(
          (toast) =>
            ({
              success: (
                <div key={toast.id} className="alert alert-success">
                  <CheckCircleIcon className="h-6 w-6" />
                  <span>{toast.message?.toString()}</span>
                </div>
              ),
              error: (
                <div key={toast.id} className="alert alert-error">
                  <ExclamationCircleIcon className="h-6 w-6" />
                  <span>{toast.message?.toString()}</span>
                </div>
              ),
              blank: (
                <div key={toast.id} className="alert">
                  <span>{toast.message?.toString()}</span>
                </div>
              ),
            })[toast.type.toString()],
        )}
    </div>
  );
}
