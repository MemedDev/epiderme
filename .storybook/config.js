import { configure, addParameters, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  options: {
    name: 'Memed - Epiderme',
    url: 'https://github.com/MemedDev/epiderme',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    enableShortcuts: true,
  },
});

addDecorator(withKnobs);

function loadStories() {
  require('./welcome.stories');

  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(story => req(story));
}

configure(loadStories, module);
