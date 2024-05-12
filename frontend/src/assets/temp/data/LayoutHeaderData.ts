export type WorkspaceOnHeaderType = {
    id: string;
    name: string;
    logo: string;
};

export type BoardOnHeaderType = {
    id: string;
    title: string;
    logo: string;
    isTemplate: boolean;
    workspaceName: string;
};

export type TemplateOnHeaderType = {
    id: string;
    title: string;
    logo: string;
}

export type Header = {
        workspaces: WorkspaceOnHeaderType[];
        recentBoards: BoardOnHeaderType[];
        starredBoards: BoardOnHeaderType[];
        publicTemplates: TemplateOnHeaderType[];
};
export const data: Header = {
  workspaces: [
    {
      id: '1',
      name: 'Workspace 1  Workspace 1 Workspace 1 Workspace 1',
      logo: 'https://picsum.photos/200/300'
    },
    {
      id: '2',
      name: 'Workspace 2',
      logo: 'https://picsum.photos/200/300'
    },
    {
      id: '3',
      name: 'Workspace 3',
      logo: 'https://picsum.photos/200/300'
    }
  ],
  recentBoards: [
    {
      id: '1',
      title: 'Board 1 Board 1 Board 1 Board 1 Board 1 Board 1',
      logo: 'https://picsum.photos/200/300',
      isTemplate:  false,
      workspaceName: 'Workspace 1'
    },
    {
      id: '2',
      title: 'Board 2',
      logo: 'https://picsum.photos/200/300',
      isTemplate:  false,
      workspaceName: 'Workspace 2'
    },
    {
      id: '3',
      title: 'Board 3',
      logo: 'https://picsum.photos/200/300',
      isTemplate:  false,
      workspaceName: 'Workspace 3'
    }
  ],
  starredBoards: [
    {
      id: '1',
      title: 'Board 1',
      logo: 'https://picsum.photos/200/300',
      isTemplate:  false,
      workspaceName: 'Workspace 1'
    }
  ],
  publicTemplates: [
    {
      id: '1',
      title: 'Template 1',
      logo: 'https://picsum.photos/200/300'
    }
  ]
}
