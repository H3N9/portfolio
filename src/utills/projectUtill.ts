type Translate = (text: string) => string;

export const projectShowcase = (t: Translate) => {
  return [
    {
      role: t('projects.list.6.role'),
      title: t('projects.list.6.title'),
      description: t('projects.list.6.description'),
      reach: {
        link: '/static/images/project/showcase/micro.png',
      },
      stack: [t('projects.list.6.stack.0'), t('projects.list.6.stack.1')],
      image: '/static/images/project/showcase/micro.png',
    },
    {
      role: t('projects.list.0.role'),
      title: t('projects.list.0.title'),
      description: t('projects.list.0.description'),
      reach: {
        link: 'https://www.allexpress.app/',
      },
      stack: [t('projects.list.0.stack.0'), t('projects.list.0.stack.1')],
      image: '/static/images/project/showcase/allexpress.png',
    },
    {
      role: t('projects.list.1.role'),
      title: t('projects.list.1.title'),
      description: t('projects.list.1.description'),
      reach: {
        link: 'https://delicate-cascaron-a921bf.netlify.app/',
        github: 'https://github.com/H3N9/spaceX',
      },
      stack: [t('projects.list.1.stack.0')],
      image: '/static/images/project/showcase/spacex.png',
    },
    {
      role: t('projects.list.2.role'),
      title: t('projects.list.2.title'),
      description: t('projects.list.2.description'),
      reach: {
        link: 'https://h3n9.github.io/web/',
        github: 'https://github.com/H3N9/web',
      },
      stack: [
        t('projects.list.2.stack.0'),
        t('projects.list.2.stack.1'),
        t('projects.list.2.stack.2'),
      ],
      image: '/static/images/project/showcase/ww.png',
    },
    {
      role: t('projects.list.3.role'),
      title: t('projects.list.3.title'),
      description: t('projects.list.3.description'),
      reach: {
        github: 'https://github.com/H3N9/Tank',
      },
      stack: [t('projects.list.3.stack.0')],
      image: '/static/images/project/showcase/tank.png',
    },
    {
      role: t('projects.list.4.role'),
      title: t('projects.list.4.title'),
      description: t('projects.list.4.description'),
      reach: {
        link: 'https://www.it.kmitl.ac.th/~it61070187/My-Project/Religion-Game/',
        github: 'https://github.com/H3N9/Religion-Game',
      },
      stack: [t('projects.list.4.stack.0')],
      image: '/static/images/project/showcase/religion.png',
    },
    {
      role: t('projects.list.5.role'),
      title: t('projects.list.5.title'),
      description: t('projects.list.5.description'),
      reach: {
        link: 'https://www.it.kmitl.ac.th/~it61070187/My-Project/Snake-Game/',
        github: 'https://github.com/H3N9/Snake-Game',
      },
      stack: [t('projects.list.5.stack.0')],
      image: '/static/images/project/showcase/snake.png',
    },
  ];
};
