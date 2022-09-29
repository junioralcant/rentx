import { CarDTO } from '../../dtos/CarDTO';

export interface CarDetailsParams {
  car: CarDTO;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: CarDetailsParams;
      Scheduling: undefined;
      SchedulingDatails: undefined;
      SchedulingComplete: undefined;
    }
  }
}
