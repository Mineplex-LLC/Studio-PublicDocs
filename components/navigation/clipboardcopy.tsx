"use client";
import { useState, useEffect } from "react";

const ClipboardCopy = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Client-side clipboard copy functionality
    document.querySelectorAll('.icon-link').forEach(icon => {
      icon.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;  // Type assertion to HTMLElement

        if (target && target.closest) {
          const headingElement = target.closest('h2, h3, h4') as HTMLElement; // Type assertion for closest element
          if (headingElement) {
            const headingText = headingElement.innerText; // innerText is valid on HTMLElement
            const slug = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            const url = `${window.location.href}#${slug}`;
            navigator.clipboard.writeText(url);

            // Show copied message and hide after 2 seconds
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }
        }
      });
    });
  }, []); // Runs once after the component is mounted

  return (
    <>
      {/* Popup message */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg text-sm transition-opacity duration-1000 opacity-100">
          Copied heading link to clipboard!
        </div>
      )}
    </>
  );
};

export default ClipboardCopy;
