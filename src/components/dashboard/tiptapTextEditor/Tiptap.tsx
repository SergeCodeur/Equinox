"use client";

import { mergeAttributes } from "@tiptap/core";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Tiptap = ({ onChange }: any) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc editor-bulletList",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal editor-orderedList",
          },
        },
      }),
      Heading.extend({
        levels: [1, 2, 3, 4, 5, 6],
        renderHTML({ node, HTMLAttributes }) {
          const level = this.options.levels.includes(node.attrs.level)
            ? node.attrs.level
            : this.options.levels[0];
          const classes: { [index: number]: string } = {
            1: "text-[2em] font-bold my-[0.67em]",
            2: "text-[1.5em] font-bold my-[0.83em]",
            3: "text-[1.17em] font-bold my-[1em]",
            4: "text-[1em] font-bold my-[1.33em]",
            5: "text-[0.83em] font-bold my-[1.67em]",
            6: "text-[0.67em] font-bold my-[2.33em]",
          };
          return [
            `h${level}`,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
              class: `${classes[level]}`,
            }),
            0,
          ];
        },
      }).configure({ levels: [1, 2, 3, 4, 5, 6] }),
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
    ],
    editorProps: {
      attributes: {
        class:
          "w-full min-w-[793px] min-h-[360px] p-4 m-4 outline-none !bg-secondary rounded-3xl shadow-text-editor text-white border border-white/10 mt-[30px]",
      },
    },

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      handleChange(html);
    },
  });

  return (
    <div className="w-full pb-[120px]">
      <Toolbar editor={editor} />
      <div className="max-w-[823px] min-h-[390px] mx-auto 2xl:mt-[83px] mt-[50px] relative flex justify-center items-center">
        <span className="absolute top-2/4 left-2/4 -translate-x-[45%] -translate-y-2/4 w-[90%] h-full bg-secondary border border-white/10 rounded-3xl rotate-[1.52deg] shadow-text-editor"></span>
        <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
