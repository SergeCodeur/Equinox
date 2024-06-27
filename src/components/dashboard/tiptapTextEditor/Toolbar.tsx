import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";

type Props = {
  editor: Editor | null;
};

// // Définir le type pour les alignements
// type TextAlign = "left" | "center" | "right" | "justify" | "unsetTextAlign";

// // Définir les types pour les propriétés de l'éditeur
// interface EditorChain {
//   setTextAlign: (alignment: TextAlign) => EditorChain;
//   unsetTextAlign: () => EditorChain;
//   run: () => void;
// }

// // Définir les types pour les propriétés du composant
// interface TextAlignDropdownProps {
//   editor: Editor;
// }

// const TextAlignDropdown: React.FC<TextAlignDropdownProps> = ({ editor }) => {
//   const [currentAlign, setCurrentAlign] = useState<TextAlign>("left");

//   const alignments: { label: string; value: TextAlign }[] = [
//     { label: "Left", value: "left" },
//     { label: "Center", value: "center" },
//     { label: "Right", value: "right" },
//     { label: "Justify", value: "justify" },
//     { label: "Unset", value: "unsetTextAlign" },
//   ];

//   const handleAlignmentChange = (alignment: TextAlign) => {
//     setCurrentAlign(alignment);
//     if (alignment === "unsetTextAlign") {
//       editor.chain().focus().unsetTextAlign().run();
//     } else {
//       editor.chain().focus().setTextAlign(alignment).run();
//     }
//   };

//   return (
//     <div>
//       <button
//         className={
//           editor.isActive({ textAlign: currentAlign }) ? "is-active" : ""
//         }
//       >
//         {currentAlign.charAt(0).toUpperCase() + currentAlign.slice(1)}
//       </button>
//       <select
//         onChange={(e: ChangeEvent<HTMLSelectElement>) =>
//           handleAlignmentChange(e.target.value as TextAlign)
//         }
//         value={currentAlign}
//       >
//         {alignments.map((align) => (
//           <option key={align.value} value={align.value}>
//             {align.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full pb-2 px-[61px] flex items-center justify-between gap-3 bg-secondary sticky top-0 z-20 border-b border-white/10">
      {/* undo redo btns */}
      <div className="space-x-2">
        {/* undo btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={` p-2
            ${
              editor.isActive("undo")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Undo2 className="w-5 h-5" />
        </button>

        {/* redo btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={` p-2
            ${
              editor.isActive("redo")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Redo2 className="w-5 h-5" />
        </button>
      </div>

      {/* text align btns */}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("left").run();
          }}
          className={` p-2
            ${
              editor.isActive({ textAlign: "left" })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <AlignLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("center").run();
          }}
          className={` p-2
            ${
              editor.isActive({ textAlign: "center" })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <AlignCenter className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("right").run();
          }}
          className={` p-2
            ${
              editor.isActive({ textAlign: "right" })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <AlignRight className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setTextAlign("justify").run();
          }}
          className={` p-2
            ${
              editor.isActive({ textAlign: "justify" })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <AlignJustify className="w-5 h-5" />
        </button>
      </div>

      {/* color picker */}
      <input
        type="color"
        className="h-7 w-7 cursor-pointer rounded-md border-none outline-none"
        onInput={(e) => {
          const input = e.target as HTMLInputElement;
          editor.chain().focus().setColor(input.value).run();
        }}
        value={editor.getAttributes("textStyle").color || "#ffffff"}
        data-testid="setColor"
      />

      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={` p-2
            ${
              editor.isActive("heading", { level: 1 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading1 className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={` p-2
            ${
              editor.isActive("heading", { level: 2 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading2 className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={` p-2
            ${
              editor.isActive("heading", { level: 3 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading3 className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 4 }).run();
          }}
          className={` p-2
						${
              editor.isActive("heading", { level: 4 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading4 className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 5 }).run();
          }}
          className={` p-2
						${
              editor.isActive("heading", { level: 5 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading5 className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 6 }).run();
          }}
          className={` p-2
						${
              editor.isActive("heading", { level: 6 })
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Heading6 className="w-6 h-6" />
        </button>
      </div>

      {/* text align */}

      {/* <TextAlignDropdown editor={editor} /> */}

      <div className="space-x-2">
        {/* bold btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={` p-2
            ${
              editor.isActive("bold")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Bold className="w-5 h-5" />
        </button>

        {/* italic btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={` p-2
            ${
              editor.isActive("italic")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Italic className="w-5 h-5" />
        </button>

        {/* underline btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={` p-2
            ${
              editor.isActive("underline")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Underline className="w-5 h-5" />
        </button>

        {/* strikethrough btn */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={` p-2
            ${
              editor.isActive("strike")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <Strikethrough className="w-5 h-5" />
        </button>
      </div>

      {/* code btn */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run();
        }}
        className={` p-2
          ${
            editor.isActive("code")
              ? "bg-primary text-white rounded-lg"
              : "text-white"
          }`}
      >
        <Code className="w-5 h-5" />
      </button>
      <button
        onClick={() =>
          editor.chain().focus().toggleHighlight({ color: "#2537E5B2" }).run()
        }
        className={` p-2
          ${
            editor.isActive("highlight")
              ? "bg-primary text-white rounded-lg"
              : "text-white"
          }`}
      >
        <Highlighter className="w-5 h-5" />
      </button>

      <div className="space-x-2">
        {/* Bullet list */}
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={` p-2
            ${
              editor.isActive("bulletList")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <List className="w-5 h-5" />
        </button>

        {/* Order list */}

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={` p-2
            ${
              editor.isActive("orderedList")
                ? "bg-primary text-white rounded-lg"
                : "text-white"
            }`}
        >
          <ListOrdered className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
