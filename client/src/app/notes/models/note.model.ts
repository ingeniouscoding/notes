export interface Note {
  title: string;
  content: string;
  color: string;
  id?: string;
  created_at?: Date;
  updated_at?: Date;
  isPending?: boolean;
}

export interface NoteUpdateDTO {
  title: string;
  content: string;
  color: string;
}
