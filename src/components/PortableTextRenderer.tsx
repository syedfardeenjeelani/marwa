import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const PortableTextComponents: PortableTextReactComponents = {
  types: {
    // Custom types for embeds, images, etc.
    image: ({ value }) => (
      <figure className="my-8">
        <img
          src={value.asset?.url}
          alt={value.alt || ""}
          className="w-full h-auto rounded-lg shadow-md"
        />
        {value.caption && (
          <figcaption className="text-sm text-gray-600 text-center mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    video: ({ value }) => (
      <div className="my-8">
        <video
          controls
          className="w-full rounded-lg shadow-md"
          src={value.asset?.url}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    ),
    audio: ({ value }) => (
      <div className="my-6">
        <audio controls className="w-full">
          <source src={value.asset?.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    ),
    iframe: ({ value }) => (
      <div className="my-8 aspect-video">
        <iframe
          src={value.url}
          className="w-full h-full rounded-lg border-0"
          allowFullScreen
          title={value.title || "Embedded content"}
        />
      </div>
    ),
    table: ({ value }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <tbody>
            {value.rows?.map((row: any, index: number) => (
              <tr key={index} className="border-b border-gray-200">
                {row.cells?.map((cell: string, cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    code: ({ value }) => (
      <div className="my-6">
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || "text"}`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),
  },
  marks: {
    // Text formatting marks
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    "strike-through": ({ children }) => (
      <s className="line-through">{children}</s>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    highlight: ({ children }) => (
      <mark className="bg-yellow-200 px-1">{children}</mark>
    ),
    superscript: ({ children }) => <sup className="text-xs">{children}</sup>,
    subscript: ({ children }) => <sub className="text-xs">{children}</sub>,
    small: ({ children }) => <small className="text-sm">{children}</small>,

    // Links and references
    link: ({ value, children }) => (
      <a
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        href={value.href}
        target={value.blank ? "_blank" : "_self"}
        rel={value.blank ? "noopener noreferrer" : undefined}
        title={value.title}
      >
        {children}
      </a>
    ),
    internalLink: ({ value, children }) => (
      <a
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        href={`/${value.slug}`}
      >
        {children}
      </a>
    ),

    // Styling marks
    textColor: ({ value, children }) => (
      <span style={{ color: value.color }}>{children}</span>
    ),
    backgroundColor: ({ value, children }) => (
      <span style={{ backgroundColor: value.color }} className="px-1">
        {children}
      </span>
    ),
    fontSize: ({ value, children }) => (
      <span style={{ fontSize: value.size }}>{children}</span>
    ),
  },
  block: {
    // All heading levels
    normal: ({ children }) => (
      <p className="mb-4 text-[18px] leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 leading-tight text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-5 mt-7 leading-tight text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-4 mt-6 leading-tight text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mb-3 mt-5 leading-tight text-gray-900">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-bold mb-3 mt-4 leading-tight text-gray-900">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-bold mb-2 mt-3 leading-tight text-gray-900">
        {children}
      </h6>
    ),

    // Quote blocks
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-gray-50 italic text-gray-700 text-[19px] leading-relaxed">
        {children}
      </blockquote>
    ),
    pullQuote: ({ children }) => (
      <blockquote className="text-2xl font-medium text-center my-8 py-6 border-t border-b border-gray-300 text-gray-700">
        {children}
      </blockquote>
    ),

    // Code blocks
    code: ({ value }) => (
      <div className="my-6">
        <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
          <code className={`language-${value.language || "text"}`}>
            {value.code}
          </code>
        </pre>
      </div>
    ),

    // Special content blocks
    callout: ({ children, value }) => (
      <div
        className={`p-4 my-6 rounded-lg border-l-4 ${
          value?.type === "warning"
            ? "bg-yellow-50 border-yellow-400 text-yellow-800"
            : value?.type === "error"
            ? "bg-red-50 border-red-400 text-red-800"
            : value?.type === "success"
            ? "bg-green-50 border-green-400 text-green-800"
            : "bg-blue-50 border-blue-400 text-blue-800"
        }`}
      >
        {value?.title && <h4 className="font-semibold mb-2">{value.title}</h4>}
        <div>{children}</div>
      </div>
    ),

    // Alignment blocks
    centerAlign: ({ children }) => (
      <div className="text-center my-4">{children}</div>
    ),
    rightAlign: ({ children }) => (
      <div className="text-right my-4">{children}</div>
    ),
    justifyAlign: ({ children }) => (
      <div className="text-justify my-4">{children}</div>
    ),

    // Semantic blocks
    address: ({ children }) => (
      <address className="not-italic bg-gray-100 p-4 rounded my-4">
        {children}
      </address>
    ),
    preformatted: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto font-mono text-sm my-4 whitespace-pre-wrap">
        {children}
      </pre>
    ),

    // Definition list items
    definitionTerm: ({ children }) => (
      <dt className="font-semibold mt-4 mb-1">{children}</dt>
    ),
    definitionDescription: ({ children }) => (
      <dd className="ml-4 mb-2 text-gray-700">{children}</dd>
    ),
  },
  list: {
    // Standard lists
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-1">
        {children}
      </ol>
    ),

    // Special list types
    check: ({ children }) => <ul className="mb-4 space-y-2">{children}</ul>,
    square: ({ children }) => (
      <ul className="list-square list-outside ml-6 mb-4 space-y-1">
        {children}
      </ul>
    ),
    alpha: ({ children }) => (
      <ol className="list-alpha list-outside ml-6 mb-4 space-y-1">
        {children}
      </ol>
    ),
    roman: ({ children }) => (
      <ol className="list-roman list-outside ml-6 mb-4 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    // Standard list items
    bullet: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),

    // Special list item types
    check: ({ children, value }) => (
      <li className="flex items-start space-x-2">
        <input
          type="checkbox"
          checked={value?.checked || false}
          readOnly
          className="mt-1 flex-shrink-0"
        />
        <span className={value?.checked ? "line-through text-gray-500" : ""}>
          {children}
        </span>
      </li>
    ),
    square: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    alpha: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    roman: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
  },

  // Line breaks and spacing
  hardBreak: () => <br />,
  softBreak: () => <span> </span>,

  // Fallback components
  unknownMark: ({ children, markType }) => (
    <span
      className="bg-red-100 text-red-800 px-1 rounded"
      title={`Unknown mark: ${markType}`}
    >
      {children}
    </span>
  ),
  unknownType: ({ value, isInline }) => {
    const Component = isInline ? "span" : "div";
    return (
      <Component className="bg-yellow-100 border border-yellow-400 p-2 rounded">
        Unknown type: {value._type}
      </Component>
    );
  },
  unknownBlockStyle: ({ children }) => (
    <p className="bg-orange-100 border border-orange-400 p-2 rounded mb-4">
      {children}
    </p>
  ),
  unknownList: ({ children }) => (
    <div className="bg-purple-100 border border-purple-400 p-2 rounded mb-4">
      {children}
    </div>
  ),
  unknownListItem: ({ children }) => (
    <div className="bg-pink-100 border border-pink-400 p-2 rounded mb-2">
      {children}
    </div>
  ),
};

const PortableTextRenderer = ({ value }: { value: PortableTextBlock[] }) => (
  <div className="prose prose-lg max-w-none">
    <PortableText value={value} components={PortableTextComponents} />
  </div>
);

export default PortableTextRenderer;
