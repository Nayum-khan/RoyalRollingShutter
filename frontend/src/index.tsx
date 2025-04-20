import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Scroll restoration logic
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto' // instant scroll
  });
};

// Run on initial load
scrollToTop();

// Also run on every page reload
window.addEventListener('beforeunload', () => {
  scrollToTop();
});

// Optional: Disable browser's scroll restoration
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);