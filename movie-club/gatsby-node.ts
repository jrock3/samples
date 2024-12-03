import nodeFetch from 'node-fetch';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { type Actions, type NodeInput } from 'gatsby';

interface SourceNodesContext {
  actions: Actions;
  createContentDigest: (input: any) => string;
  cache: Cache;
}

export const sourceNodes = async ({ actions, createContentDigest, cache }: SourceNodesContext) => {
  const { createNode } = actions;

  const response = await nodeFetch(`https://sheets.googleapis.com/v4/spreadsheets/xxxxxx/values/Master!A1:N?key=${process.env.GOOGLE_SHEETS_API_KEY}`);
  const resultData = await response.json();
  if (!resultData || !resultData.values || !Array.isArray(resultData.values)) {
    return console.log('Invalid response data structure:', resultData);
  }
  console.log('Spreadsheet data ready');

  resultData.values.forEach((row: (string|Record<string, string>)[], index: number) => {
    const nodeData: Record<string, unknown> = {
      actors: '',
      adjustedAverage: undefined,
      adjustedRating: undefined,
      averageRating: row[6],
      current: false,
      director: '',
      genre: '',
      internal: {
        type: 'MovieNode',
        contentDigest: createContentDigest(resultData),
      },
    };

    createNode(nodeData as NodeInput);
  });
};