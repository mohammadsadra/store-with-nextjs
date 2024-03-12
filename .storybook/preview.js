/** @type { import('@storybook/react').Preview } */
export const decorators = [
  (Story) => (
      <div style={{ fontFamily: '"Josefin Sans", sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
        <Story />
      </div>
  ),
];
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export default preview;
