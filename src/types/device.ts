import { Tutorial, TutorialCategory } from './tutorial';

export interface DeviceInfo {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  imageUrl?: string;
  available: boolean;
  categories: TutorialCategory[];
}

export interface DeviceRegistry {
  [deviceId: string]: DeviceInfo;
}
