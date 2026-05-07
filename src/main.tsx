import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Error handling for missing root element
if (!rootElement) {
  console.error('Root element not found! Make sure index.html has a <div id="root"></div>');
    throw new Error('Root element not found!');
    }

    console.log('Root element found, initializing React app...');

    // Create and render the app
    try {
      createRoot(rootElement).render(
          <StrictMode>
                <App />
                    </StrictMode>,
                      );
                        console.log('React app rendered successfully!');
                        } catch (error) {
                          console.error('Error rendering React app:', error);
                            throw error;
                            }