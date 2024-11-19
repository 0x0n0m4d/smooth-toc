import React from 'react';
import { Box } from '@kuma-ui/core';
import markdowContent from '@/example.md?raw';

export const MarkdowView: React.FC = () => {
  return <Box className="markdown-view">{markdowContent}</Box>;
};
