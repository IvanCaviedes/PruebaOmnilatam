import { createSelector } from "@ngrx/store";
import { CarsState, } from "../reducers/cars.reducer";

export interface Appstate {
    carReducer: CarsState,
}

export const selectCarReducer = (state: Appstate) => state.carReducer

export const selectCars = createSelector(
    selectCarReducer,
    (state: CarsState) => state.CARS
)

export const selectUniqueCars = createSelector(
    selectCarReducer,
    (state: CarsState, props: { id: number }) => {
        return state.CARS.filter(item => item.Id == props.id)[0]
    }
)

export const selectCarsModel = createSelector(
    selectCarReducer,
    (state: CarsState, props: { Brand: string }) => {
        console.log(props.Brand)
        return state.CARS.filter(item => item.Model.toLowerCase().includes(props.Brand.toLowerCase()))
    }
)