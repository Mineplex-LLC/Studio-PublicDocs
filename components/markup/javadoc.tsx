import React from 'react';
import Card from './card';
import CardGrid from './cardgrid';
import { cn } from '@/lib/utils';
import { LuBookCopy, LuFolderClosed } from 'react-icons/lu';
import { iconMap } from '@/settings/icons';

interface JavadocLinkProps {
  classpath: string;
  groupId?: string;  // Optional groupId
  artifactId?: string;  // Optional artifactId
}

const JavadocLink: React.FC<JavadocLinkProps> = ({ classpath, groupId = 'com.mineplex.studio.sdk', artifactId = 'sdk' }) => {
  if (!classpath) return null;

  const ExternalIcon = iconMap["arrowUpRight"];

  // Convert the classpath to the Javadoc URL
  const parts = classpath.split('.');
  const classPathUrl = parts.join('/');
  const url = `https://www.javadoc.io/doc/${groupId}/${artifactId}/latest/${classPathUrl}.html`;

  return (
    <div className={cn("flex")}>
      <ul className="border list-none !p-4 !py-1 !m-0">
        <li className="list-none">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex items-center cursor-pointer py-1 text-xs hover:text-foreground transition-all")}
          >
            <span className="ml-1">
              <LuBookCopy size={14} />
            </span>
            <span className="ml-2">View the JavaDocs</span>
            <ExternalIcon className="w-4 ml-2 h-4 group-hover:stroke-[4]" strokeWidth={3} />            
          </a>
        </li>
      </ul>
    </div>
  );
};

export default JavadocLink;
