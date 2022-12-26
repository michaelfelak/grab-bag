import { Person } from './person.model';

export interface GrabBagEntry {
  key: string;
  year: number;
  giver?: Person;
  receiver?: Person;
  notes?: string;
}
