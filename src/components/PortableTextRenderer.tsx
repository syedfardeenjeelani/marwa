
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react"; 
import type { PortableTextBlock } from "@portabletext/types";

const PortableTextComponents: PortableTextReactComponents = {
  types: {
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        className="text-blue-600 hover:underline"
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => (
      <h1 className="h1 text-3xl font-bold !mb-4 !leading-[1.3]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-4">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[#3f78e0] leading-[1.7] font-medium pl-4 border-l-[0.15rem] border-solid !text-[1rem] !my-8">
        <p>{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  hardBreak: () => <br />,
  unknownMark: ({ children }) => <span>{children}</span>,
  unknownType: ({ children }) => <span>{children}</span>,
  unknownBlockStyle: ({ children }) => <p>{children}</p>,
  unknownList: ({ children }) => <p>{children}</p>,
  unknownListItem: ({ children }) => <p>{children}</p>,
};

const PortableTextRenderer = ({ value }: { value: PortableTextBlock[] }) => (
  <PortableText value={value} components={PortableTextComponents} />
);

export default PortableTextRenderer;
