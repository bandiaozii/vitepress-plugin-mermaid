import type { MarkdownOptions } from 'vitepress';

import mdItCustomAttrs from 'markdown-it-custom-attrs'
import callout from 'vitepress-plugin-callout'
import markdown_it_sub from "markdown-it-sub";
import markdown_it_sup from "markdown-it-sup";
import markdown_it_footnote from "markdown-it-footnote";
import markdown_it_deflist from "markdown-it-deflist";
import markdown_it_mark from "markdown-it-mark";
import mathjax3 from 'markdown-it-mathjax3';



export const markdown: MarkdownOptions = {
    // lineNumbers: true,
    config: (md) => {
        md.use(mdItCustomAttrs, 'image',
            { 'data-fancybox': "gallery" });
        md.use(markdown_it_sub);
        md.use(markdown_it_sup);
        md.use(markdown_it_footnote);
        md.use(markdown_it_deflist);
        md.use(callout);
        md.use(markdown_it_mark);
        md.use(mathjax3);
    }

};