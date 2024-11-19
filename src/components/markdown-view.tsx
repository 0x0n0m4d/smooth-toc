import React, { useEffect } from 'react';
import { Box } from '@kuma-ui/core';
import markdownContent from '@/example.md?raw';
import { useContentStore } from '@/stores/content';

export const MarkdowView: React.FC = () => {
  const { dom, render } = useContentStore();
  useEffect(() => {
    render(markdownContent);
  }, [render]);
  return <Box className="markdown-view">{dom || 'rendering...'}</Box>;
};
