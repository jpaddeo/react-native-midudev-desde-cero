import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListUI } from './RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListUI', () => {
    it('renders repositories info correctly', () => {
      const repositories = [
        {
          node: {
            id: 'jaredpalmer.formik',
            fullName: 'jaredpalmer/formik',
            description: 'Build forms in React, without the tears 😭',
            language: 'TypeScript',
            forksCount: 2270,
            stargazersCount: 27897,
            ratingAverage: 90,
            reviewCount: 5,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/50745844?v=4',
          },
        },
        {
          node: {
            id: 'async-library.react-async',
            fullName: 'async-library/react-async',
            description: '🍾 Flexible promise-based React data loader',
            language: 'JavaScript',
            forksCount: 87,
            stargazersCount: 1999,
            ratingAverage: 72,
            reviewCount: 3,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/54310907?v=4',
          },
        },
        {
          node: {
            id: 'rzwitserloot.lombok',
            fullName: 'rzwitserloot/lombok',
            description:
              'Very spicy additions to the Java programming language.',
            language: 'Java',
            forksCount: 1974,
            stargazersCount: 10423,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/45949248?v=4',
          },
        },
        {
          node: {
            id: 'rails.rails',
            fullName: 'rails/rails',
            description: 'Ruby on Rails',
            language: 'Ruby',
            forksCount: 19592,
            stargazersCount: 48788,
            ratingAverage: 100,
            reviewCount: 2,
            ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/4223?v=4',
          },
        },
        {
          node: {
            id: 'django.django',
            fullName: 'django/django',
            description: 'The Web framework for perfectionists with deadlines.',
            language: 'Python',
            forksCount: 25157,
            stargazersCount: 58889,
            ratingAverage: 73,
            reviewCount: 2,
            ownerAvatarUrl: 'https://avatars.githubusercontent.com/u/27804?v=4',
          },
        },
        {
          node: {
            id: 'apollographql.apollo-client',
            fullName: 'apollographql/apollo-client',
            description:
              ':rocket: A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.',
            language: 'TypeScript',
            forksCount: 2163,
            stargazersCount: 16546,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/17189275?v=4',
          },
        },
        {
          node: {
            id: 'reduxjs.redux',
            fullName: 'reduxjs/redux',
            description: 'Predictable state container for JavaScript apps',
            language: 'TypeScript',
            forksCount: 14784,
            stargazersCount: 56421,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/13142323?v=4',
          },
        },
        {
          node: {
            id: 'spring-projects.spring-framework',
            fullName: 'spring-projects/spring-framework',
            description: 'Spring Framework',
            language: 'Java',
            forksCount: 30701,
            stargazersCount: 43783,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/317776?v=4',
          },
        },
        {
          node: {
            id: 'zeit.next.js',
            fullName: 'zeit/next.js',
            description: 'The React Framework',
            language: 'JavaScript',
            forksCount: 13731,
            stargazersCount: 71250,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/14985020?v=4',
          },
        },
        {
          node: {
            id: 'zeit.swr',
            fullName: 'zeit/swr',
            description: 'React Hooks for remote data fetching',
            language: 'TypeScript',
            forksCount: 635,
            stargazersCount: 18143,
            ratingAverage: 0,
            reviewCount: 0,
            ownerAvatarUrl:
              'https://avatars.githubusercontent.com/u/14985020?v=4',
          },
        },
      ];

      const { getAllByTestId } = render(
        <RepositoryListUI repositories={repositories} />
      );

      const repositoriesNames = getAllByTestId('RepositoryItemHeaderName');
      const repositoriesDescriptions = getAllByTestId(
        'RepositoryItemHeaderDescription'
      );
      repositories.forEach((repository, index) => {
        expect(repositoriesNames[index]).toHaveTextContent(repository.fullName);
        expect(repositoriesDescriptions[index]).toHaveTextContent(
          repository.description
        );
      });
    });
  });
});
