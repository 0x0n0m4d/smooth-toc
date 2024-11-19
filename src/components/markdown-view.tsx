import React from "react";
import markdowContent from "@/example.md?raw";
import { Box } from "@kuma-ui/core";

export const MarkdowView: React.FC = () => {
  return <Box className='markdown-view'>{markdowContent}</Box>
}
