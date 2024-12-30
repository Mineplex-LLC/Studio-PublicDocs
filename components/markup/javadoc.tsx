import React from 'react';

interface JavadocLinkProps {
  classpath: string;
  groupId?: string;  // Optional groupId
  artifactId?: string;  // Optional artifactId
}

const JavadocLink: React.FC<JavadocLinkProps> = ({ classpath, groupId = 'com.mineplex.studio.sdk', artifactId = 'sdk' }) => {
  if (!classpath) return null;

  // Convert the classpath to the Javadoc URL
  const parts = classpath.split('.');
  const classPathUrl = parts.join('/');
  const url = `https://www.javadoc.io/doc/${groupId}/${artifactId}/latest/${classPathUrl}.html`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-4 border border-orange-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-orange-500"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-500"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </div>
      <div>
        <div className="text-lg font-semibold text-neutral-100 no-underline">View the JavaDocs for this</div>
      </div>
    </a>
  );
};

export default JavadocLink;