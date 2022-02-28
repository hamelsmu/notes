
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','c12'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/actions/',
        component: ComponentCreator('/actions/','ad5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/actions/ocotkit',
        component: ComponentCreator('/actions/ocotkit','df8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/actions/resources',
        component: ComponentCreator('/actions/resources','8b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/concurrency',
        component: ComponentCreator('/concurrency','004'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docker/Docker-In-Action',
        component: ComponentCreator('/docker/Docker-In-Action','4ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fastai/batch_predicitions',
        component: ComponentCreator('/fastai/batch_predicitions','c58'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fastai/fundamentals',
        component: ComponentCreator('/fastai/fundamentals','050'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/how-to-learn/lhtl',
        component: ComponentCreator('/how-to-learn/lhtl','187'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/jupyter/remote_browser',
        component: ComponentCreator('/jupyter/remote_browser','169'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/',
        component: ComponentCreator('/linux/','915'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/bash_scripting',
        component: ComponentCreator('/linux/bash_scripting','1da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/cookbook',
        component: ComponentCreator('/linux/cookbook','1f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/misc_utils',
        component: ComponentCreator('/linux/misc_utils','f7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/osx',
        component: ComponentCreator('/linux/osx','2ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/linux/permprocdata',
        component: ComponentCreator('/linux/permprocdata','dd2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/programming-languages/pl',
        component: ComponentCreator('/programming-languages/pl','2b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
