import H1 from "./H1";

export const richTextComponents = {
  heading1: ({ children }) => <H1>{children}</H1>,
  paragraph: ({ children }) => (
    <p className="text-xl text-center max-w-xl mx-auto leading-8 tracking-wider">
      {children}
    </p>
  ),
};
