export interface INote {
    title: string,
    description: string,
    category: 'personal' | 'work' | 'study' | 'other',
    pinned: boolean,
    tags: {
        label: string,
        color: string
    },
 }