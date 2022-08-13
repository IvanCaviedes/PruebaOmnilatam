import { createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/services/Car.interface';
import CarsData from '../../services/Cars.api.json'

export interface CarsState {
    LOADING: boolean;
    CARS: Array<Car>;
    ERROR: string;
}

const initialState: CarsState = {
    LOADING: false,
    CARS: CarsData,
    ERROR: ''
}

export const carReducer = createReducer(
    initialState
)