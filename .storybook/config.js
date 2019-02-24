import { configure, addParameters, addDecorator, setAddon } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import JSXAddon from 'storybook-addon-jsx';

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

addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withInfo);
setAddon(JSXAddon);

function loadStories() {
  require('./welcome.stories');

  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(story => req(story));
}

configure(loadStories, module);
