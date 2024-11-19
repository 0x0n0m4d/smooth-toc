import { create } from 'zustand';
import { MarkdowRenderer } from '@/markdown-renderer';
import type { Root as HastRoot } from 'hast';
import type { Root as MdastRoot } from 'mdast';

type ContentType = React.ReactElement<
  unknown,
  string | React.JSXElementConstructor<any>
>;
