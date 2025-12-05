import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/project-a/__docusaurus/debug',
    component: ComponentCreator('/project-a/__docusaurus/debug', 'b44'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/config',
    component: ComponentCreator('/project-a/__docusaurus/debug/config', '581'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/content',
    component: ComponentCreator('/project-a/__docusaurus/debug/content', '8d1'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/globalData',
    component: ComponentCreator('/project-a/__docusaurus/debug/globalData', '8e7'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/metadata',
    component: ComponentCreator('/project-a/__docusaurus/debug/metadata', 'a6a'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/registry',
    component: ComponentCreator('/project-a/__docusaurus/debug/registry', '3f7'),
    exact: true
  },
  {
    path: '/project-a/__docusaurus/debug/routes',
    component: ComponentCreator('/project-a/__docusaurus/debug/routes', '7cb'),
    exact: true
  },
  {
    path: '/project-a/',
    component: ComponentCreator('/project-a/', '08a'),
    routes: [
      {
        path: '/project-a/',
        component: ComponentCreator('/project-a/', '339'),
        routes: [
          {
            path: '/project-a/',
            component: ComponentCreator('/project-a/', '932'),
            routes: [
              {
                path: '/project-a/deployment',
                component: ComponentCreator('/project-a/deployment', '038'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/project-a/setup',
                component: ComponentCreator('/project-a/setup', '1d0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/project-a/stack',
                component: ComponentCreator('/project-a/stack', 'b9e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/project-a/',
                component: ComponentCreator('/project-a/', '7b0'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
