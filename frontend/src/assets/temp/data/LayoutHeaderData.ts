type WorkspaceOnHeaderType = {
    id: string;
    name: string;
    url: string;
    logo: string;
};

type BoardOnHeaderType = {
    id: string;
    title: string;
    isTemplate: boolean;
    workspaceName: string;
    url: string;
};

type TemplateOnHeaderType = {
    id: string;
    title: string;
    url: string;
}

type Header = {
        workspaces: WorkspaceOnHeaderType[];
        recentBoards: BoardOnHeaderType[];
        starredBoards: BoardOnHeaderType[];
        publicTemplates: TemplateOnHeaderType[];
};
export const data: Header = {
  workspaces: [
    {
      id: '1',
      name: 'Workspace 1',
      url: 'working_space.com',
      logo: ''
    }
  ],
  recentBoards: [
    {
      id: '1',
      title: 'Board 1',
      isTemplate:  false,
      workspaceName: 'Workspace 1',
      url: 'recent_board.com'
    }
  ],
  starredBoards: [
    {
      id: '1',
      title: 'Board 1',
      isTemplate:  false,
      workspaceName: 'Workspace 1',
      url: 'starred_board.com'
    }
  ],
  publicTemplates: [
    {
      id: '1',
      title: 'Template 1',
      url: 'public_template.com'
    }
  ]
}
