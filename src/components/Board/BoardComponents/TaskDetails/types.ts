import { BoardSubtask } from '@/types/generalTypes';

export type subtaskProps = BoardSubtask & { column: number; taskId: string };
