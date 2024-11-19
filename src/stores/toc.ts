import { RefObject } from 'react';
import { create } from 'zustand';
import {
  mdastExtractHeadings,
  TOCHeading
} from '@/utils/mdast-extract-headings';
import type { Root } from 'mdast';

export type Section = TOCHeading & {
  headingRef: RefObject<HTMLHeadingElement> | null;
  outlineRef: RefObject<HTMLLIElement> | null;
  isVisible: boolean;
};
export type TocState = {
  sections: Section[];
  update: (mdast: Root) => void;
  registerHeading: (id: string, ref: RefObject<HTMLHeadingElement>) => void;
  registerOutlineItem: (id: string, ref: RefObject<HTMLLIElement>) => void;
  setVisibleHeadings: (id: string[]) => void;
};

export const useTocStore = create<TocState>((set, get) => ({
  sections: [],
  update: (mdast: Root) => {
    if (mdast) {
      const prevSections = get().sections;
      const sections = mdastExtractHeadings(mdast).map(h => {
        const prev = prevSections.find(s => s.id === h.id);
        return {
          ...h,
          isVisible: false,
          headingRef: prev ? prev.headingRef : null,
          outlineRef: prev ? prev.outlineRef : null
        };
      });
      set({ sections });
    } else {
      set({ sections: [] });
    }
  },
  registerHeading: (id: string, ref: RefObject<HTMLHeadingElement>) => {
    set(state => ({
      sections: state.sections.map(s =>
        s.id === id ? { ...s, headingRef: ref } : s
      )
    }));
  },
  registerOutlineItem: (id: string, ref: RefObject<HTMLLIElement>) => {
    set(state => ({
      sections: state.sections.map(s =>
        s.id === id ? { ...s, outlineRef: ref } : s
      )
    }));
  },
  setVisibleHeadings: (ids: string[]) => {
    set(state => ({
      sections: state.sections.map(s => ({
        ...s,
        isVisible: ids.includes(s.id)
      }))
    }));
  }
}));
